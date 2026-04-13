SELECT TOP 5 ID, Name, FilePath, DocumentTypeID
FROM DMSFileinfo_Claims 
WHERE FilePath LIKE '%26040206200%'


SELECT TOP 10 ID, Name FROM Mst_DocumentType ORDER BY ID
