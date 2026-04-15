-- Get insurer info for our claim
SELECT c.ID, ic.ID as InsurerID, ic.Name, ic.ShortName
FROM Claims c
JOIN Mst_InsuranceCompany ic ON ic.ID = c.InsuranceCompanyID
WHERE c.ID = 26040206200

-- Check Mst_InsuranceCompany columns
SELECT TOP 5 ID, Name, ShortName FROM Mst_InsuranceCompany ORDER BY ID
