-- Files where FilePath ends with date folder (no claim subfolder)
SELECT TOP 5 FilePath, SystemFileName, Name
FROM DMSFileinfo_Claims
WHERE FilePath NOT LIKE '%[0-9]-[0-9]/%[0-9]-%[0-9]/%'
AND FilePath LIKE '%DMSDocuments%'
AND Deleted = 0
ORDER BY ID DESC

-- Also check what FilePath looks like for our working file
SELECT TOP 10 FilePath, SystemFileName 
FROM DMSFileinfo_Claims
WHERE CreatedDatetime > '2026-04-09'
AND Deleted = 0
ORDER BY ID DESC
