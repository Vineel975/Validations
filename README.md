-- Find a claim that has attachments successfully loaded in UI
-- Check the path format
SELECT TOP 3 FilePath, SystemFileName 
FROM DMSFileinfo_Claims 
WHERE Deleted = 0
AND FilePath NOT LIKE '%26040206200%'
ORDER BY ID DESC
