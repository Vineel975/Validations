SELECT TOP 1
  cd.ClaimID, cd.Slno, cd.MemberPolicyID, cd.ProviderId,
  cd.ReceivedDate, cd.Diagnosis, cd.BillAmount, cd.SanctionedAmount,
  cd.StageID, cd.Deleted,
  p.ID AS ProviderPK, p.Name AS ProviderName,
  cs.ID AS StagePK, cs.Name AS StageName
FROM Claimsdetails cd
LEFT JOIN Provider p    ON p.ID = cd.ProviderId
LEFT JOIN Claimstage cs ON cs.ID = cd.StageID
WHERE cd.ClaimID = 26040206200
