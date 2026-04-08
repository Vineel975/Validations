-- Check ClaimInward table structure
SELECT TOP 1 * FROM ClaimInward WHERE ClaimID = 26040206200


-- Check what tables reference ClaimID and have MemberPolicyID
SELECT TABLE_NAME, COLUMN_NAME 
FROM INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME = 'MemberPolicyID'
AND TABLE_NAME IN ('ClaimInward', 'ClaimRequest', 'Claims', 'ClaimMaster', 'ClaimHeader')
