SELECT ID, Name, SystemFileName, FilePath, DocumentTypeID
FROM DMSFileinfo_Claims 
WHERE FilePath LIKE '%26040206200%'
AND Deleted = 0
ORDER BY ID
