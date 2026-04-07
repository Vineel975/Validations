[ClaimAI] Coding saved: {success: false, message: "Invalid object name 'SumInsuredCategory'."}

SELECT TABLE_SCHEMA, TABLE_NAME 
FROM INFORMATION_SCHEMA.TABLES 
WHERE TABLE_NAME LIKE '%SumInsured%' 
   OR TABLE_NAME LIKE '%Category%'
   OR TABLE_NAME LIKE '%SICategory%'
ORDER BY TABLE_SCHEMA, TABLE_NAME
