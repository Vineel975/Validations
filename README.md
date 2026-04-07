SELECT c.name, t.name as type
FROM sys.table_types tt
JOIN sys.columns c ON c.object_id = tt.type_table_object_id  
JOIN sys.types t ON t.user_type_id = c.user_type_id
WHERE tt.name LIKE '%Coding%'
ORDER BY c.column_id


Index:16626 [ClaimAI] Coding save failed: Error While Inserting Data into Staging TableTrying to pass a table-valued parameter with 34 column(s) where the corresponding user-defined table type requires 35 column(s).
﻿



[ClaimAI] Coding saved: {success: false, message: "Invalid object name 'SumInsuredCategory'."}

SELECT TABLE_SCHEMA, TABLE_NAME 
FROM INFORMATION_SCHEMA.TABLES 
WHERE TABLE_NAME LIKE '%SumInsured%' 
   OR TABLE_NAME LIKE '%Category%'
   OR TABLE_NAME LIKE '%SICategory%'
ORDER BY TABLE_SCHEMA, TABLE_NAME


<img width="300" height="259" alt="image" src="https://github.com/user-attachments/assets/e36c6cc0-283c-4a2d-acbd-328458a41be2" />

