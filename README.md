public string GetDMSToken()
{
    var token = "";
    try
    {
        ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;
        var client = new HttpClient();
        string apiUrl = DMSApiURL + "api/Auth/generatetoken";
        DMSTokenRequestModel docReq = new DMSTokenRequestModel();
        docReq.clientId = ClientID;
        docReq.apiKey = DMSAPIKey;
        var jsonDoc = JsonConvert.SerializeObject(docReq).ToString();
        var request = new HttpRequestMessage(HttpMethod.Post, apiUrl);
        var content = new StringContent(jsonDoc.ToString(), null, "application/json");
        request.Content = content;
        var response = client.SendAsync(request).GetAwaiter().GetResult();
        if (response.IsSuccessStatusCode)
        {
            token = response.Content.ReadAsStringAsync().Result;
        }
    }
    catch (Exception ex)
    {
        throw ex;
    }
    return token;
}
