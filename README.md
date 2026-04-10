https://nxtgen-dms-api-qa.fhpl.net/api/Document/claimdocumenturls?claimId=26040206200&claimExtNo=1

SELECT ID, InsurerClaimID FROM Claims WHERE ID = 26040206200

SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'Claims' 
AND COLUMN_NAME LIKE '%Claim%'
ORDER BY COLUMN_NAME
