import { NextResponse } from "next/server";

/**
 * GET /api/icd?condition=cataract        — search by condition name
 * GET /api/icd?code=H25.11               — lookup by exact code
 *
 * Proxies NLM ICD-10-CM API to avoid CORS errors in the browser.
 * Returns: { codes: Array<{ code: string; description: string }> }
 */
export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const condition = searchParams.get("condition")?.trim();
    const code      = searchParams.get("code")?.trim();

    const terms  = code ?? condition;
    const maxList = code ? "5" : "10";

    if (!terms) {
      return NextResponse.json({ codes: [] });
    }

    const url =
      `https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search` +
      `?sf=code,name&terms=${encodeURIComponent(terms)}&maxList=${maxList}`;

    const response = await fetch(url, { signal: AbortSignal.timeout(8000) });

    if (!response.ok) {
      return NextResponse.json({ codes: [] }, { status: 502 });
    }

    // NLM response: [totalCount, [codes], null, [[code,name],...]]
    const result = await response.json() as [number, string[], null, [string, string][]];
    const codesArr   = result[1] ?? [];
    const namesArr   = result[3] ?? [];

    const codes = codesArr.map((c, i) => ({
      code:        c,
      description: namesArr[i]?.[1] ?? c,
    }));

    return NextResponse.json({ codes }, {
      headers: { "Cache-Control": "public, max-age=3600" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ codes: [], error: message }, { status: 500 });
  }
}
