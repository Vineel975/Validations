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



ID
Name
SystemFileName
DNSName
EntityID
EntityLevelID_P6
FilePath
DocumentTypeID
ReceivedModeID
FilseSizeinKB
FileType
Deleted
CreatedUserRegionID
CreatedDatetime
DeletedUserRegionID
DeletedDatetime


FilePath                                                                                                                                                                                                                                                         SystemFileName                                                                                       DocumentTypeID Name
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------- -------------- ----------------------------------------------------------------------------------------------------
DMSDocuments/2026/2026-3/2026-3-4/                                                                                                                                                                                                                               16f756d1-3ddf-4291-a710-3604cd633f42_134170958039959894.pdf                                          NULL           assets_helpdocuments_ESSV5_UserManual_ind.pdf
DMSDocuments/2026/2026-3/2026-3-4/                                                                                                                                                                                                                               321556d9-0bff-42f0-abcc-4ec0d851077c_134170958028029790.pdf                                          NULL           Permissionrequest.pdf
C://NeftBouncclaimsPortingPath/RejectedFiles/2025/2025-12/2025-12-8/                                                                                                                                                                                             f114d5fd-b2e8-45dc-9785-01ef686a75c3_134096599258756759.xlsx                                         NULL           VAPT_Solutions.xlsx
C://NeftBouncclaimsPortingPath/RejectedFiles/2025/2025-12/2025-12-8/                                                                                                                                                                                             d77b6c6c-c771-4c49-8d95-ba61957e6fd5_134096597194929211.xlsx                                         NULL           VAPT_Solutions.xlsx
DMSDocuments/2025/2025-12/2025-12-8/                                                                                                                                                                                                                             1c644bed-7cd5-41f1-b8ce-75beb317193a_134096594048730935.xlsx                                         NULL           VAPT_Solutions.xlsx


