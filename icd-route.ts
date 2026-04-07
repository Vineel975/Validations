import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

interface IcdEntry { c: string; n: string; l: number; }

let _cache: IcdEntry[] | null = null;
let _codeMap: Map<string, IcdEntry> | null = null;

function loadMaster(): { list: IcdEntry[]; map: Map<string, IcdEntry> } {
  if (_cache && _codeMap) return { list: _cache, map: _codeMap };
  try {
    const filePath = join(process.cwd(), "public", "icd-master.json");
    _cache = JSON.parse(readFileSync(filePath, "utf-8")) as IcdEntry[];
    _codeMap = new Map(_cache.map((e) => [e.c, e]));
  } catch {
    _cache = [];
    _codeMap = new Map();
  }
  return { list: _cache!, map: _codeMap! };
}

function findAncestors(specificCode: string, list: IcdEntry[], map: Map<string, IcdEntry>): IcdEntry[] {
  const ancestors: IcdEntry[] = [];

  // Walk up by shortening the code
  let code = specificCode;
  while (code.length > 1) {
    if (code.includes(".")) {
      const dotIdx = code.lastIndexOf(".");
      const afterDot = code.slice(dotIdx + 1);
      code = afterDot.length > 1
        ? code.slice(0, dotIdx + 1) + afterDot.slice(0, -1)
        : code.slice(0, dotIdx);
    } else {
      code = code.slice(0, -1);
    }
    if (map.has(code)) ancestors.push(map.get(code)!);
  }

  // Find range codes (L1, L2) that cover this code
  const prefix3 = specificCode.slice(0, 3);
  for (const entry of list) {
    if (!entry.c.includes("-") || entry.l > 2) continue;
    const [start, end] = entry.c.split("-");
    if (start.slice(0, 3) <= prefix3 && prefix3 <= end.slice(0, 3)) {
      ancestors.push(entry);
    }
  }

  return [...new Map(ancestors.map((a) => [a.c, a])).values()]
    .sort((a, b) => a.l - b.l);
}

/**
 * GET /api/icd?q=cataract         → search, returns top 80
 * GET /api/icd?code=H25.11        → description for exact code
 * GET /api/icd?hierarchy=H25.11   → all 7 levels for a specific code
 * GET /api/icd?diagnosis=text     → best match + full 7-level hierarchy
 * GET /api/icd?condition=...      → legacy alias for q=
 */
export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const { list, map } = loadMaster();

  const q          = (searchParams.get("q") ?? searchParams.get("condition") ?? "").trim().toLowerCase();
  const exactCode  = (searchParams.get("code") ?? "").trim();
  const hierarchy  = (searchParams.get("hierarchy") ?? "").trim();
  const diagnosis  = (searchParams.get("diagnosis") ?? "").trim().toLowerCase();

  // ── Hierarchy for a known code ──────────────────────────────────────────────
  if (hierarchy) {
    const entry = map.get(hierarchy);
    const ancestors = findAncestors(hierarchy, list, map);
    const chain: IcdEntry[] = [...ancestors, ...(entry ? [entry] : [])];

    // Build 7 slots: slot i = code at level i+1 (or null)
    const slots: Array<{ code: string; description: string; level: number } | null> = Array(7).fill(null);
    for (const e of chain) {
      const idx = e.l - 1; // level 1 → slot 0
      if (idx >= 0 && idx < 7) slots[idx] = { code: e.c, description: e.n, level: e.l };
    }
    return NextResponse.json({ slots, chain: chain.map((e) => ({ code: e.c, description: e.n, level: e.l })) });
  }

  // ── Auto-generate 7 levels from diagnosis text ──────────────────────────────
  if (diagnosis) {
    const terms = diagnosis.split(/[,;]+/).map((t) => t.trim()).filter(Boolean);

    // Find the most specific (highest level) matching code
    let bestMatch: IcdEntry | null = null;
    let bestScore = -1;

    for (const term of terms) {
      // Prefer higher-level specific codes (level 5-7)
      const candidates = list.filter(
        (e) => e.n.toLowerCase().includes(term) && e.l >= 4
      );
      for (const c of candidates) {
        // Score: level weight + keyword overlap
        const words = term.split(/\s+/);
        const matchedWords = words.filter((w) => c.n.toLowerCase().includes(w)).length;
        const score = c.l * 10 + matchedWords;
        if (score > bestScore) { bestScore = score; bestMatch = c; }
      }
    }

    // Fallback: any level
    if (!bestMatch) {
      for (const term of terms) {
        const fallback = list.find((e) => e.n.toLowerCase().includes(term));
        if (fallback) { bestMatch = fallback; break; }
      }
    }

    if (!bestMatch) return NextResponse.json({ slots: Array(7).fill(null), chain: [] });

    const ancestors = findAncestors(bestMatch.c, list, map);
    const chain: IcdEntry[] = [...ancestors, bestMatch];

    const slots: Array<{ code: string; description: string; level: number } | null> = Array(7).fill(null);
    for (const e of chain) {
      const idx = e.l - 1;
      if (idx >= 0 && idx < 7) slots[idx] = { code: e.c, description: e.n, level: e.l };
    }
    return NextResponse.json({ slots, chain: chain.map((e) => ({ code: e.c, description: e.n, level: e.l })) });
  }

  // ── Exact code description ──────────────────────────────────────────────────
  if (exactCode) {
    const match = map.get(exactCode);
    if (match) return NextResponse.json({ codes: [{ code: match.c, description: match.n, level: match.l }] });
    const prefix = list.filter((e) => e.c.toLowerCase().startsWith(exactCode.toLowerCase())).slice(0, 5);
    return NextResponse.json({ codes: prefix.map((e) => ({ code: e.c, description: e.n, level: e.l })) });
  }

  // ── Search ──────────────────────────────────────────────────────────────────
  if (!q) return NextResponse.json({ codes: [] });

  const qUpper = q.toUpperCase();
  const byCode = list.filter((e) => e.c.toUpperCase().startsWith(qUpper));
  const byName = list.filter((e) => !e.c.toUpperCase().startsWith(qUpper) && e.n.toLowerCase().includes(q));
  const results = [...byCode, ...byName].slice(0, 80);

  return NextResponse.json({
    codes: results.map((e) => ({ code: e.c, description: e.n, level: e.l })),
  });
}
