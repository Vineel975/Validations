[ClaimAI] GetMedicalBillDocument response: false S3 key tried: DMSDocuments/2026/2026-4/2026-4-2/26040206200-1/bbdcc440-339b-4046-b572-f146bfe68984_134196090511792392.pdf | Error: The remote server returned an error: (403) Forbidden


SELECT SystemFileName, FilePath FROM DMSFileinfo_Claims 
WHERE FilePath LIKE '%26040206200-1/' 
AND ISNULL(Deleted,0)=0 AND FileType='.pdf' 
ORDER BY ID


-- 1. Check DMSFileinfo_Provider structure
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'DMSFileinfo_Provider'
ORDER BY ORDINAL_POSITION

-- 2. Find tariff docs for the provider of our claim
SELECT TOP 5 p.FilePath, p.SystemFileName, p.DocumentTypeID, p.Name
FROM DMSFileinfo_Provider p
WHERE p.EntityID = (SELECT ProviderID FROM Claims WHERE ID = 26040206200)
AND ISNULL(p.Deleted, 0) = 0
ORDER BY p.ID DESC

-- 3. Check document type for tariff
SELECT ID, Name FROM Mst_DocumentType WHERE Name LIKE '%Tariff%' OR Name LIKE '%tariff%'
