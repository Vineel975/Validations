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
