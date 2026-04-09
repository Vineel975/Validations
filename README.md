SELECT c.name, t.name as type
FROM sys.table_types tt
JOIN sys.columns c ON c.object_id = tt.type_table_object_id  
JOIN sys.types t ON t.user_type_id = c.user_type_id
WHERE tt.name LIKE '%Bill%'
ORDER BY tt.name, c.column_id
