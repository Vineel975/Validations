SELECT TOP 1 
    d.Name, d.SystemFileName, d.FilePath,
    d.DNSName
FROM DMSFileinfo_Claims d
WHERE d.FilePath LIKE '%26040206200-1%'
AND d.Deleted = 0
