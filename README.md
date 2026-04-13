SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_NAME LIKE '%S3%'
ORDER BY TABLE_NAME


-- Check if DMSFileinfo_Claims has any S3 or URL based paths
SELECT TOP 5 FilePath, DNSName, SystemFileName
FROM DMSFileinfo_Claims
WHERE FilePath LIKE '%s3%' 
   OR FilePath LIKE '%http%'
   OR FilePath LIKE '%amazonaws%'
   OR DNSName LIKE '%s3%'
   OR DNSName LIKE '%amazonaws%'

-- Also check other DMS tables
SELECT TOP 5 * FROM GO_DIGIT_DMS_FILEINFO
SELECT TOP 5 * FROM Reliance_DMS_FILEINFO
