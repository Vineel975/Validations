-- Step 1: Get MemberPolicyID
SELECT TOP 1 MemberPolicyID FROM Claims WHERE ID = 26040206200

-- Step 2: Find other claims for same member
SELECT TOP 10 cl.ID, cl.MemberPolicyID, cl.DateofAdmission, cl.ProbableDiagnosis
FROM Claims cl
WHERE cl.MemberPolicyID = (SELECT TOP 1 MemberPolicyID FROM Claims WHERE ID = 26040206200)
AND cl.ID != 26040206200
AND cl.Deleted = 0


-- Find a MemberPolicyID that has multiple claims
SELECT TOP 5 MemberPolicyID, COUNT(*) AS ClaimCount
FROM Claims
WHERE Deleted = 0
GROUP BY MemberPolicyID
HAVING COUNT(*) > 1
ORDER BY ClaimCount DESC
