[ClaimAI] GetMedicalBillDocument response: false S3 key tried: DMSDocuments/2026/2026-4/2026-4-2/26040206200-1/bbdcc440-339b-4046-b572-f146bfe68984_134196090511792392.pdf | Error: The remote server returned an error: (403) Forbidden


SELECT SystemFileName, FilePath FROM DMSFileinfo_Claims 
WHERE FilePath LIKE '%26040206200-1/' 
AND ISNULL(Deleted,0)=0 AND FileType='.pdf' 
ORDER BY ID


function OpenTariffPopUp(probableDOA, prcNo) {
    var PRCNo = MakeNullfromUndefinedorEmpty(prcNo);
    if (PRCNo != null) {
        //var url = 'http://webshare.fhpl.net/ProviderTariff/Home.aspx?PRC=' + PRCNo + '&DOA=' + probableDOA + '&AppName=MCare Product';
        var url = '/Common/ProviderTariff?PRCNO=' + PRCNo + '';
        window.open(url, "width=1000, height=600");
    }
}

-- Find what PRCNo is for our claim's provider
SELECT c.ID, c.ProviderID, c.MOUID, p.PRCNo, p.Name as ProviderName
FROM Claims c
JOIN Mst_Provider p ON p.ID = c.ProviderID
WHERE c.ID = 26040206200

-- Find tariff docs linked to that PRCNo
SELECT TOP 5 * FROM DMSFileinfo_Provider 
WHERE EntityID = (
    SELECT p.ID FROM Mst_Provider p
    JOIN Claims c ON c.ProviderID = p.ID
    WHERE c.ID = 26040206200
)
