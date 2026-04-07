import { NextResponse } from "next/server";
import sql from "mssql";

const getDbConfig = (): sql.config => ({
  server:   process.env.MEMBER_DB_SERVER   ?? "",
  database: process.env.MEMBER_DB_DATABASE ?? "",
  user:     process.env.MEMBER_DB_USER     ?? "",
  password: process.env.MEMBER_DB_PASSWORD ?? "",
  options:  { encrypt: false, trustServerCertificate: true },
  connectionTimeout: 10000,
  requestTimeout:    10000,
});

/**
 * GET /api/previous-claims?claimId=xxx&memberPolicyId=yyy(optional)
 * Returns previous claims for the same member policy, excluding current claim.
 * If memberPolicyId not provided, looks it up from claimId.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const claimId        = searchParams.get("claimId")?.trim();
  let   memberPolicyId = searchParams.get("memberPolicyId")?.trim();

  if (!claimId) return NextResponse.json({ claims: [] });

  let pool: sql.ConnectionPool | null = null;
  try {
    pool = await sql.connect(getDbConfig());

    // If memberPolicyId not provided, look it up from Claimsdetails
    if (!memberPolicyId) {
      const lookup = await pool.request()
        .input("claimId", sql.BigInt, parseInt(claimId))
        .query(`SELECT TOP 1 MemberPolicyID FROM Claimsdetails WHERE ClaimID = @claimId AND Deleted = 0`);
      if (lookup.recordset.length > 0) {
        memberPolicyId = String(lookup.recordset[0].MemberPolicyID);
      }
    }

    if (!memberPolicyId) return NextResponse.json({ claims: [] });

    const result = await pool.request()
      .input("memberPolicyId", sql.BigInt, parseInt(memberPolicyId))
      .input("claimId", sql.BigInt, parseInt(claimId))
      .query(`
        SELECT TOP 10
          cd.ClaimID,
          cd.SlNo,
          cd.DateOfAdmission,
          cd.DateOfDischarge,
          cd.Diagnosis,
          cd.PlanOfTreatment,
          cd.BillAmount,
          cd.SanctionedAmount,
          cd.PresentComplaint,
          ISNULL(p.ProviderName, '') AS HospitalName,
          ISNULL(cs.StageName, '')   AS Status
        FROM Claimsdetails cd
        LEFT JOIN MasterData.Providers p   ON p.ProviderID = cd.ProviderID
        LEFT JOIN MasterData.ClaimStage cs ON cs.StageID   = cd.StageID
        WHERE cd.MemberPolicyID = @memberPolicyId
          AND cd.ClaimID        != @claimId
          AND cd.Deleted        = 0
        ORDER BY cd.DateOfAdmission DESC
      `);

    const claims = result.recordset.map((row) => ({
      claimId:        String(row.ClaimID),
      slNo:           row.SlNo,
      admissionDate:  row.DateOfAdmission  ? new Date(row.DateOfAdmission).toLocaleDateString("en-IN")  : null,
      dischargeDate:  row.DateOfDischarge  ? new Date(row.DateOfDischarge).toLocaleDateString("en-IN")  : null,
      diagnosis:      row.Diagnosis        ?? null,
      treatment:      row.PlanOfTreatment  ?? null,
      complaint:      row.PresentComplaint ?? null,
      billAmount:     row.BillAmount       ?? null,
      approvedAmount: row.SanctionedAmount ?? null,
      hospital:       row.HospitalName     ?? null,
      status:         row.Status           ?? null,
    }));

    return NextResponse.json({ claims });
  } catch (err) {
    console.error("[previous-claims] DB error:", err);
    return NextResponse.json({ claims: [], error: String(err) });
  } finally {
    if (pool) await pool.close();
  }
}
