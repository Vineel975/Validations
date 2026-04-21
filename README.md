[ClaimAI] STEP 2 StartClaimAuditProxy: false CHECKPOINT 1e FAILED: ClaimAI returned HTTP 400 from [https://claim-helixview.fhpl.net/api/audit/start]. Response: {"success":false,"error":"Request must be multipart/form-data."}

<!-- Update ClaimAI URL -->
<add key="ClaimAIUrl" value="https://claim-helixview.fhpl.net" />

<!-- Update CSP_FrameSrc — allow iframe from new subdomain -->
<add key="CSP_FrameSrc" value="'self' https://nxtgen-dms-scn-qa.fhpl.net https://claim-helixview.fhpl.net" />

<!-- Update CSP_ConnectSrc — allow JS connections to new subdomain -->
<add key="CSP_ConnectSrc" value="'self' https://enterprise.smsgupshup.com https://enterprise.webaroo.com https://nhcx-tpa-qa.fhpl.net https://nhcx-api.fhpl.net https://nxtgen-dms-api-qa.fhpl.net https://nxtgen-api.fhpl.net https://cashless-api-qa-v1.fhpl.net https://spectra-app-qa-v9.fhpl.net https://uat-spectra.fhpl.net https://spectraqa.fhpl.net https://webshare.fhpl.net https://www.ackodev.com https://magmahealth.magma-hdi.co.in https://fhpl.co https://col.site24x7rum.in https://claim-helixview.fhpl.net" />


[ClaimAI] StartClaimAuditProxy response: false StartClaimAuditProxy error: An error occurred while sending the request. null

Check EC2 Security Group — the ClaimAI EC2 security group must allow inbound traffic on port 443 from the Spectra EC2 IP.

# On Spectra QA EC2
nslookup claim-helixview.fhpl.net
ping claim-helixview.fhpl.net

curl https://claim-helixview.fhpl.net/api/audit/start
