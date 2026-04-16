GetMedicalBillDocument response: true Medical bill loaded from zip. Files: 2 | MergedSize: 8.88MB
Index:14862 [ClaimAI] Medical bill loaded. File: 26041406227-medicalbill.pdf Size(chars): 12419608



[ClaimAI] Coding save failed: Error While Inserting Data into Staging Table. Trying to pass a table-valued parameter with 36 column(s) where the corresponding user-defined table type requires 35 column(s).


-- Check what columns the TVP type has
SELECT c.name, c.column_id, t.name as type
FROM sys.table_types tt
JOIN sys.columns c ON c.object_id = tt.type_table_object_id
JOIN sys.types t ON t.user_type_id = c.user_type_id
WHERE tt.name LIKE '%Coding%'
ORDER BY c.column_id
