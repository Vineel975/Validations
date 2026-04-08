SELECT TOP 1 ClaimID, Slno, StageID, ReceivedDate, BillAmount, SanctionedAmount, Diagnosis
FROM Claimsdetails WHERE ClaimID = 26040206200

-- Find MemberPolicy related columns
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'Claimsdetails' 
AND COLUMN_NAME LIKE '%Member%' OR COLUMN_NAME LIKE '%Policy%' OR COLUMN_NAME LIKE '%Provider%'
