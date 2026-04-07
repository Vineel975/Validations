import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

interface IcdEntry { c: string; n: string; l: number; }

let _cache: IcdEntry[] | null = null;

function loadMaster(): IcdEntry[] {
  if (_cache) return _cache;
  try {
    const filePath = join(process.cwd(), "public", "icd-master.json");
    _cache = JSON.parse(readFileSync(filePath, "utf-8")) as IcdEntry[];
  } catch {
    _cache = [];
  }
  return _cache;
}

/**
 * GET /api/icd?q=cataract          → search by name/code, returns top 50 matches
 * GET /api/icd?code=H25.11         → fetch description for a specific code
 * GET /api/icd?condition=cataract  → legacy: same as q= (for backward compat)
 */
export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const q         = (searchParams.get("q") ?? searchParams.get("condition") ?? "").trim().toLowerCase();
  const exactCode = (searchParams.get("code") ?? "").trim().toLowerCase();

  const master = loadMaster();

  if (exactCode) {
    // Exact code lookup — return single match
    const match = master.find((e) => e.c.toLowerCase() === exactCode);
    if (match) {
      return NextResponse.json({ codes: [{ code: match.c, description: match.n, level: match.l }] });
    }
    // Fallback: prefix match
    const prefix = master.filter((e) => e.c.toLowerCase().startsWith(exactCode)).slice(0, 5);
    return NextResponse.json({ codes: prefix.map((e) => ({ code: e.c, description: e.n, level: e.l })) });
  }

  if (!q) {
    return NextResponse.json({ codes: [] });
  }

  // Search: code prefix first, then name contains
  const qUpper = q.toUpperCase();
  const byCode = master.filter((e) => e.c.toUpperCase().startsWith(qUpper));
  const byName = master.filter((e) => !e.c.toUpperCase().startsWith(qUpper) && e.n.toLowerCase().includes(q));

  const results = [...byCode, ...byName].slice(0, 80);

  return NextResponse.json({
    codes: results.map((e) => ({ code: e.c, description: e.n, level: e.l })),
  });
}
