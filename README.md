<img width="1280" height="630" alt="image" src="https://github.com/user-attachments/assets/d365e819-f798-47cf-8d5e-fd857ac8e4f4" />

<img width="1299" height="578" alt="image" src="https://github.com/user-attachments/assets/a00e28e4-28ce-441a-9081-d39443b11c66" />

<img width="1291" height="558" alt="image" src="https://github.com/user-attachments/assets/363da784-3f1a-4581-aebf-ea0c5050e557" />

<img width="1305" height="532" alt="image" src="https://github.com/user-attachments/assets/afa9903b-7586-4252-b022-5bf6f28e237a" />

<img width="772" height="621" alt="image" src="https://github.com/user-attachments/assets/1c5b7a30-d48b-41f1-83dc-64ae4d78131f" />







https://nxtgen-dms-api-qa.fhpl.net/api/Document/claimdocumenturls?claimId=26040206200&claimExtNo=1

SELECT ID, InsurerClaimID FROM Claims WHERE ID = 26040206200

SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'Claims' 
AND COLUMN_NAME LIKE '%Claim%'
ORDER BY COLUMN_NAME
