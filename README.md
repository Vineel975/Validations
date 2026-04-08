-- Check date columns and ProviderID column name
SELECT TOP 1 ReceivedDate, ProviderID, StageID, BillAmount, SanctionedAmount, MemberpolicyID
FROM Claimsdetails WHERE ClaimID = 26040206200

-- Check Providers table name and columns
SELECT TOP 3 * FROM MasterData.Providers

-- Check ClaimStage table
SELECT TOP 10 * FROM MasterData.ClaimStage
