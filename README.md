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


public ActionResult ProviderTariff(string tariffKey)
{
    try
    {
        if (Session[SessionValue.UserRegionID] != null)
        {
            string decryptQuryStr = new MasterUtilsBL().Decrypt(tariffKey.Replace(" ", "+"), Convert.ToString(ConfigurationManager.AppSettings["URLEncryptionKey"]));
            string[] splitKeys = decryptQuryStr.Split('|');
            long providerId = long.Parse(splitKeys[0]);
            string MOUID = splitKeys[1].ToString();
            DataTable dtTariffDoc = new ProviderViewModel().GetTariffDocsInfo(providerId, MOUID.ToString(), 0);
            DataTable dtTariffDocWithOutMouId = new ProviderViewModel().GetTariffDocsInfo(providerId, MOUID.ToString(), 0, "NotMapped");
            DataTable dtProvider = new CommonViewModel().GetProviderDetails(providerId);

            ViewData["LoginType"] = Session[SessionValue.LoginType]?.ToString();

            if (dtProvider.Rows.Count > 0)
            {
                ViewData["ProviderDetails"] = JsonConvert.SerializeObject(dtProvider);
            }


            //LoginType 1 means Internal Users
            if (dtTariffDocWithOutMouId.Rows.Count > 0)// && ((Session[SessionValue.LoginType] != null && Session[SessionValue.LoginType].ToString() == "1") || dtTariffDoc.Rows.Count == 0))
            {
                ViewData["ProviderTariffDocDataWithOutMouId"] = JsonConvert.SerializeObject(dtTariffDocWithOutMouId);
            }
            if (dtTariffDoc.Rows.Count > 0)
            {
                ViewData["ProviderTariffDocData"] = JsonConvert.SerializeObject(dtTariffDoc);
            }
        }
        else
        {
            return RedirectToAction("MCareLogin", "Account");
        }
    }
    catch (Exception ex)
    {
        Elmah.ErrorLog errorLog = Elmah.ErrorLog.GetDefault(null);
        errorLog.ApplicationName = System.Web.Configuration.WebConfigurationManager.AppSettings["AppName"].ToString();
        errorLog.Log(new Elmah.Error(ex));
        return RedirectToAction("Error");
    }
    return View();
}
