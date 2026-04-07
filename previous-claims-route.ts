import { NextResponse } from "next/server";
import { getPreviousClaims } from "@/lib/db";

/**
 * GET /api/previous-claims?claimId=xxx&memberPolicyId=yyy(optional)
 */
export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const claimId        = searchParams.get("claimId")?.trim();
  const memberPolicyId = searchParams.get("memberPolicyId")?.trim();

  if (!claimId) return NextResponse.json({ claims: [] });

  try {
    const claims = await getPreviousClaims(claimId, memberPolicyId);
    return NextResponse.json({ claims });
  } catch (err) {
    console.error("[previous-claims]", err);
    return NextResponse.json({ claims: [], error: String(err) });
  }
}
