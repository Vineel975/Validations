PRC is the unique (system gen) ID given as Reference code to Providers
 
ProviderID is DB ID for that record
 
We dont use ProviderID externally
 
Its internal 


SELECT 
    c.ID as ClaimID,
    c.ProviderID,
    p.PRCNo,
    d.FilePath,
    d.SystemFileName,
    d.Name
FROM Claims c
JOIN Mst_Provider p ON p.ID = c.ProviderID
LEFT JOIN DMSFileinfo_Provider d ON d.EntityID = c.ProviderID
WHERE c.ID = 26040206200
AND ISNULL(d.Deleted, 0) = 0
ORDER BY d.ID DESC
 
