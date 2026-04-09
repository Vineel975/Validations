SELECT TOP 1 ID, ClaimID, ServiceID, BillAmount, DeductionAmount, BillNo, BillDate
FROM ClaimsBillDetails 
WHERE ClaimID = 26040206200
ORDER BY ID DESC
