-- See exact JSON that BillingPartialView sends - check an existing saved row
SELECT TOP 1 ServiceID, BillNo, BillDate, BillAmount, DeductionAmount
FROM ClaimsBillDetails 
WHERE ClaimID = 26040206200 AND Deleted = 0
ORDER BY ID DESC

-- Check if deductions are stored separately
SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES 
WHERE TABLE_NAME LIKE '%Deduct%'
ORDER BY TABLE_NAME
