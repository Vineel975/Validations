/**
 * POST /api/benefit-plan
 *
 * Fetches benefit plan snapshot from Spectra DB for a given claimId.
 * If DB connection fails (e.g. network unreachable from EC2), returns
 * empty snapshot instead of 500 — so AI processing continues unblocked.
 *
 * Place at: app/api/benefit-plan/route.ts
 */

import { NextRequest, NextResponse } from "next/server";
import { getBenefitPlanSnapshotByClaimId } from "@/convex/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { claimId?: string };
    const claimId = body?.claimId?.trim();

    if (!claimId) {
      return NextResponse.json({ snapshot: null }, { status: 200 });
    }

    // Attempt DB fetch — if unreachable, return empty snapshot gracefully
    try {
      const snapshot = await getBenefitPlanSnapshotByClaimId(claimId);
      return NextResponse.json({ snapshot: snapshot ?? null }, { status: 200 });
    } catch (dbError) {
      // DB unreachable — return empty snapshot so UI continues without benefit plan data
      console.warn(
        "[benefit-plan] DB connection failed, returning empty snapshot:",
        dbError instanceof Error ? dbError.message : String(dbError)
      );
      return NextResponse.json({ snapshot: null }, { status: 200 });
    }
  } catch (error) {
    // Malformed request — return empty snapshot
    console.error("[benefit-plan] Request error:", error);
    return NextResponse.json({ snapshot: null }, { status: 200 });
  }
}
