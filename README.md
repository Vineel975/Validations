public string GetDmsDocsurl(long claimID, int Slno)
{
    string docstring = ""; List<DocumentUrlresponse> strIresponse = null;
    try
    {
        string token = GetDMSToken();
        if (token != "")
        {
            string apiUrl = DMSApiURL + "API/Document/claimdocumenturls";
            using (var client = new HttpClient())
            {
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;
                string param = "?claimId=" + claimID.ToString() + "&claimExtNo=" + Slno.ToString();
                client.DefaultRequestHeaders.Accept.Clear();
                Uri completeUri = new Uri(apiUrl + param);
                client.DefaultRequestHeaders.Add("Authorization", "Bearer " + token);
                HttpResponseMessage apiResponse = client.GetAsync(completeUri).GetAwaiter().GetResult();
                if (apiResponse.IsSuccessStatusCode)
                {
                    string result = apiResponse.Content.ReadAsStringAsync().Result.ToString();
                    if (result != null && result != "No documents found")
                        strIresponse = JsonConvert.DeserializeObject<List<DocumentUrlresponse>>(result.ToString());
                    if (strIresponse != null && strIresponse.Any())
                    {
                        int count = 0;
                        foreach (DocumentUrlresponse jogg in strIresponse)
                        {
                            if (count != 0)
                                docstring = docstring + ";";
                            docstring = docstring + jogg.documentUrl + "," + jogg.documentName;
                            count = count + 1;
                        }
                    }
                }
            }
            ;
        }
    }
    catch (Exception ex)
    {
        throw ex;
    }

    return docstring;
}
