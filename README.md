-- Check what server Spectra IIS runs on vs DNSName in DB
SELECT DISTINCT DNSName, COUNT(*) as FileCount 
FROM DMSFileinfo_Claims 
WHERE Deleted = 0
GROUP BY DNSName
ORDER BY FileCount DESC
