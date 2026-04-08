-- Step 1: Get MemberPolicyID
SELECT TOP 1 MemberPolicyID FROM Claims WHERE ID = 26040206200

-- Step 2: Find other claims for same member
SELECT TOP 10 cl.ID, cl.MemberPolicyID, cl.DateofAdmission, cl.ProbableDiagnosis
FROM Claims cl
WHERE cl.MemberPolicyID = (SELECT TOP 1 MemberPolicyID FROM Claims WHERE ID = 26040206200)
AND cl.ID != 26040206200
AND cl.Deleted = 0
