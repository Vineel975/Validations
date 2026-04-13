<?xml version="1.0" encoding="utf-8"?>
<!--
  For more information on how to configure your ASP.NET application, please visit
  http://go.microsoft.com/fwlink/?LinkId=301880
  -->
<configuration>
  <configSections>
    <!-- For more information on Entity Framework configuration, visit http://go.microsoft.com/fwlink/?LinkID=237468 -->
    <section name="log4net" type="log4net.Config.Log4NetConfigurationSectionHandler, log4net" />
    <section name="entityFramework" type="System.Data.Entity.Internal.ConfigFile.EntityFrameworkSection, EntityFramework, Version=6.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" requirePermission="false" />
    <sectionGroup name="elmah">
      <section name="security" requirePermission="false" type="Elmah.SecuritySectionHandler, Elmah" />
      <section name="errorLog" requirePermission="false" type="Elmah.ErrorLogSectionHandler, Elmah" />
      <section name="errorMail" requirePermission="false" type="Elmah.ErrorMailSectionHandler, Elmah" />
      <section name="errorFilter" requirePermission="false" type="Elmah.ErrorFilterSectionHandler, Elmah" />
    </sectionGroup>
  </configSections>
	<location path="DefaultCaptcha/Generate">
       <system.web>
         <authorization>
           <allow users="?" />
         </authorization>
       </system.web>
   </location>
  <connectionStrings>
    <add name="DefaultConnection" connectionString="Data Source=(LocalDb)\v11.0;AttachDbFilename=|DataDirectory|\aspnet-Enrollment-20150129024306.mdf;Initial Catalog=aspnet-Enrollment-20150129024306;Integrated Security=True" providerName="System.Data.SqlClient" />
    <add name="ESecurityEntities" connectionString="metadata=res://*/ESecurityApi.DL.SecurityModel.csdl|res://*/ESecurityApi.DL.SecurityModel.ssdl|res://*/ESecurityApi.DL.SecurityModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=200.200.201.106;initial catalog=ESecurity;persist security info=True;user id=devuser;password=dev@123;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
    <add name="RedisConnectionSessionString" connectionString="200.200.201.178,password=Fhpl@1024,connectTimeout=3000" />

    <add name="EnrollmentDAL.Properties.Settings.McareProductConnectionString" connectionString="Data Source=10.1.10.8;Initial Catalog=McareProduct;User ID=appuser;Password=Am@ravath!@1" providerName="System.Data.SqlClient" />

    <!-- Dev -->
    <!--<add name="McarePlusEntities" connectionString="metadata=res://*/MCAREPlusModel.csdl|res://*/MCAREPlusModel.ssdl|res://*/MCAREPlusModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=spectra-db-qa.fhpl.in;initial catalog=Mcareplus_nhcx;user ID=subbu;Password=sar@1507;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
    <add name="McarePlus_AuditEntities" connectionString="metadata=res://*/AuditModel.csdl|res://*/AuditModel.ssdl|res://*/AuditModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=spectra-db-qa.fhpl.in;initial catalog=McarePlus_Audit_nhcx;user ID=subbu;Password=sar@1507;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />-->
    <!-- QA -->
    <!--<add name="McarePlusEntities" connectionString="metadata=res://*/MCAREPlusModel.csdl|res://*/MCAREPlusModel.ssdl|res://*/MCAREPlusModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=spectra-db-qa.fhpl.in;initial catalog=McarePlus_QA;Integrated Security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient"/>
    <add name="McarePlus_AuditEntities" connectionString="metadata=res://*/AuditModel.csdl|res://*/AuditModel.ssdl|res://*/AuditModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=spectra-db-qa.fhpl.in;initial catalog=McarePlus_Audit_QA;Integrated Security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient"/>-->
    <!-- Preprod -->
    <add name="McarePlusEntities" connectionString="metadata=res://*/MCAREPlusModel.csdl|res://*/MCAREPlusModel.ssdl|res://*/MCAREPlusModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=spectra-db-qa.fhpl.in;initial catalog=McarePlus_QA;Integrated Security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
    <add name="McarePlus_AuditEntities" connectionString="metadata=res://*/AuditModel.csdl|res://*/AuditModel.ssdl|res://*/AuditModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=spectra-db-qa.fhpl.in;initial catalog=McarePlus_Audit_preprod;Integrated Security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
    <!--LIVE-->
    <!--<add name="McarePlusEntities" connectionString="metadata=res://*/MCAREPlusModel.csdl|res://*/MCAREPlusModel.ssdl|res://*/MCAREPlusModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data Source=Spectra-DB-Write.fhpl.in;Initial Catalog=MCAREPlus;Integrated Security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
    <add name="McarePlus_AuditEntities" connectionString="metadata=res://*/AuditModel.csdl|res://*/AuditModel.ssdl|res://*/AuditModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data Source=Spectra-DB-Write.fhpl.in;Initial Catalog=MCAREPlus_Audit;Integrated Security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />-->
   <!--Prod-backup-->
    <!--<add name="McarePlusEntities" connectionString="metadata=res://*/MCAREPlusModel.csdl|res://*/MCAREPlusModel.ssdl|res://*/MCAREPlusModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=AWS-Prod-ReportingSRV02.fhpl.in;initial catalog=Mcareplus;user ID=subbu;Password=sbi@1521;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
    <add name="McarePlus_AuditEntities" connectionString="metadata=res://*/AuditModel.csdl|res://*/AuditModel.ssdl|res://*/AuditModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=AWS-Prod-ReportingSRV02.fhpl.in;initial catalog=McarePlus_Audit;user ID=subbu;Password=sbi@1521;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />-->

  </connectionStrings>
  <appSettings>
    <add key="webpages:Version" value="3.0.0.0" />
    <add key="webpages:Enabled" value="false" />
    <add key="ClientValidationEnabled" value="true" />
    <add key="UnobtrusiveJavaScriptEnabled" value="true" />
	  <add key="HDFCWhatsAppCorpIDs" value="23508,23509,23510" />
	  <add key="ANZCorpIDs" value="21432,21433,81890,21144,21001,21143" />
	  <add key="OnAuditReferToInsurer" value="10" />
	  <add key="Enviroment" value="dev" />
    <!--e-PreAuth-->
    <!--<add key="vSqlConePreAuth" value="Data Source=Epreauth-DB-write.fhpl.in;user id=EPREAUTHPRODUSER;Password=Epr@2%20;database=McareEpreauth" />-->
    <add key="vSqlConePreAuth" value="Data Source=spectra-db-qa.fhpl.in;user id=subbu;Password=sar@1507;database=McareEpreauth" />
    <add key="vSqlConePreAuthh" value="Data Source=spectra-db-qa.fhpl.in;user id=appuser;password=Jakall!23$;database=McareEpreauth" />
    <add key="vSqlConMcare" value="Data Source=10.1.10.15;user id=appuser;password=N%Jz9k;database=McareProduct" />
 
    <add key="sqlConMCarePlus" value="Data Source=spectra-db-qa.fhpl.in;Initial Catalog=McarePlus_QA;Integrated Security=True;" />
    <add key="sqlConMCarePlusReadServer" value="Data Source=spectra-db-qa.fhpl.in;Initial Catalog=McarePlus_QA;Integrated Security=True;" />
    <add key="sqlConMCarePlusArchiveServer" value="Data Source=spectra-db-qa.fhpl.in;Initial Catalog=McarePlus_QA;Integrated Security=True;" />
     <add key="MCarePlusReadSearchDb" value="Data Source=spectra-db-qa.fhpl.in;Initial Catalog=McarePlus_QA;Integrated Security=True;" />
   
    <!-- UAT -->
    <add key="sqlConLoginProviderServer" value="Data Source=Spectra-DB-QA.fhpl.in;User ID=spectraqa1;Password=Qa7db!23$;database=login;Min Pool Size=50; Max Pool Size=1000;Pooling=true;applicationintent=readonly" />
    <add key="sqlConLogin" value="Data Source=Spectra-DB-QA.fhpl.in;Initial Catalog=Login;User ID=spectraqa1;Password=Qa7db!23$" />
    
	  <!--DEV Archival Process-->
	  <add key="requiredRecordCount" value="10" />
	  <add key="noOfYearRestriction" value="3" />
	  <!-- End DEV Archival Process-->

    <add key="Excel07ConnectionString" value="Provider=Microsoft.ACE.OLEDB.12.0;Data Source={0};Extended Properties='Excel 8.0;HDR=YES;IMEX=1'" />
    <add key="Excel07NewConnectionString" value="Provider=Microsoft.Jet.OLEDB.4.0;Data Source={0};Extended Properties='Excel 8.0;HDR=YES;IMEX=1'" />
    <add key="UploadDocumentPath" value="C://DMSDocuments/" />
	  <add key="MemberPortingPath" value="D://MemberPorting/" />
	  <add key="MemberDocbucketname" value="qa-spectra-app-s3-provider-docs" />
    <add key="RejectedFilePath" value="D://MemberPorting/RejectedFiles/" />
    <add key="PackagesUploadedPath" value="C://PackagesUploaded/" />
    <add key="BulkSettlementPortingPath" value="C://BulkSettlementPortingPath/" />
    <add key="BulkSettlementRejectedFilePath" value="C://BulkSettlementPortingPath/RejectedFiles/" />
    <add key="BulkClaimIDUpdationPath" value="C://BulkClaimIDUpdationPath/" />
    <add key="BulkClaimIDUpdationPath" value="C://BulkClaimIDUpdationPath/" />
	  <add key="BulkDocbucketname" value="qa-spectra-app-s3-provider-docs" />
	  <add key="BulkModification" value="C://BulkModification/" />
	  <add key="BulkModificationRejectedFilePath" value="C://BulkModification/RejectedFiles\" />
    <add key="MaxBulkUpdation" value="3000" />
	<add key="Maxportingdata" value="10000" />
	<add key="Insertportingdata" value="false" />
	  <add key="BulkInvestigation" value="C://BulkInvestigation/" />
	  <add key="BulkInvestigationRejectedFilePath" value="C://BulkInvestigation/RejectedFiles/" />
    <add key="xmlPath" value="" />
    <add key="EmailRelayServer" value="10.1.10.5" />
    <add key="FromMail" value="donotreply@fhpl.net" />
    <add key="TestToMail" value="venkat.mandadi@fhpl.net" />
    <add key="TestCCMail" value="viswanathreddy.n@fhpl.net" />
    <add key="TestBCCMail" value="bayyareddy.v@fhpl.net" />
    <add key="IsmailsLive" value="false" />
    <add key="AppName" value="SpectraApp" />
    <add key="Apptype" value="SPECTRA Development" />
    <add key="AppLive" value="false" />
    <add key="LoginAttemptCount" value="5" />
    <add key="PasswordExpiryDays" value="90" />
    <add key="IsTagicAppForProvReq" value="0" />
    <add key="sqlCmdTimeOut" value="600" />
    <add key="i3CaseDataAPI" value="" />
    <add key="i3UploadDocAPI" value="" />
    <add key="i3APIKey" value="" />
	<add key="TresholdScore" value="2" />
	<add key="PasswordExpiryHours" value="72" />
	  <add key="ProviderDocbucketname" value="qa-s3-development" />
    <add key="ProviderDocaccesskey" value="AKIA4RIZ2MOPS4F5JXZR" />
    <add key="ProviderDocsecretkey" value="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" />
	  <add key="ProviderUploadDocumentPath" value="C://BulkClaimIDUpdationPath/" />
	  
	  <!--<add key="MagmaBitlyURL" value="https://magmahealth.magma-hdi.co.in/Bitly/Url/CreateUrl" />-->
    <add key="MagmaBitlyURL" value="http://spectraqa2.fhpl.in/Url/CreateUrl" />
    <add key="urlToCreateBitly" value="https://spectraqa.fhpl.net/bitly/Url/CreateUrl" />
    <add key="ACKOReqIDCallbackAPI" value="https://www.ackodev.com/health/tpa-sync/fhpl/claims" />

    <!--Webshare Letters Path-->
    <!--<add key="EpreauthLettersPath" value="https://20.198.77.115/FAXServer/Spectra_Epreauth_PDFFiles/" />-->
    <add key="EpreauthLettersPath" value="C://FAXServer/Spectra_Epreauth_PDFFiles/" />

    <!--Add To the EpreAuth Folder ServerNames-->
    <add key="EpreAuthFilesServer" value="http://20.198.77.115/" />

	  <!--DMS-->
	  <add key="ClientID" value="FHPL" />
	  <add key="DMSAPIKey" value="iYrczLsPjRdr8npgqBw+fP2Uy9wQJfdl2pry2GTEVJzxwPpU01vKlUvElm2Yh90S" />
	  <add key="URLEncryptionKey" value="DMSSPECTRA2023" />
	  <add key="DMSApiURL" value="https://nxtgen-dms-api-qa.fhpl.net/" />
      <add key="DMSScanURL" value="https://nxtgen-dms-scn-qa.fhpl.net/#/dms-scanner" />
	  <add key="ProviderBulkUpdationMasterDataSheetPath" value="C://ProviderUpload" />
	  <add key="ProviderBulkUpdationRejectedFilePath" value="C://ProviderUpload" />
	  <add key="ProviderBulkUpdation" value="C://ProviderUpload" />
	  <add key="ProviderBulkUpdationMasterDataSheetPath" value="C://ProviderUpload" />
	  
	  
    <add key="VendorAccessUser" value="1" />
    <add key="ANZCorpIDs" value="21432,21144,21433,21001,78877,81890,21143,21431,21372" />
    <add key="SBIPolicyNo" value="4101200600000146-04,4101200600000231-04,4101200600000148-04,4101200600000232-04,4101200600000149-04,4101200600000151-04,4101200600000229-04,4101200600000152-04,4101200600000228-04,4101200600000153-04,4101200600000227-04,4101200600000230-04,500500-CYIENT-P,500500-CYIENTP,ABHI-HINDUSTAN,0204002823P100718940,78877,81890,21143,21431,21372" />
    <add key="MenuId" value="114" />
    <add key="ITGItoken" value="RmhwbEtleTpwc2RmZyRqa2wzNDU=" />
    <add key="ITGIAPIurl" value="https://uat-spectra.fhpl.net/api/ITIC/SpectraAuthPush" />
     <!--<add key ="NhcxApiurl" value="https://nhcx-tpa-qa.fhpl.net/"/>-->
    <add key="NhcxApiurl" value="https://nhcx-api.fhpl.net/" />
    <!--<add key ="NhcxApiurl" value="https://localhost:7242/"/>-->
    <add key="DMSDocumentPath" value="https://uat-spectra.fhpl.net/api/ITIC/SpectraAuthPush" />
    <add key="ProviderTariffDocumentPath" value="TariffDocs/" />
    <add key="ProviderTariffDocumentPathWebShare" value="TariffDocs/" />
    <add key="S3SpectraBucketName" value="prod-s3-spectra" />
    <add key="S3FaxserverBucketName" value="prod-s3-faxserver" />
    <add key="WebShareURL" value="https://webshare.fhpl.net/" />
    <add key="DMSDirectoryName" value="E://,D://,C://,F://,G://" />
    <add key="SpectraAPIKey" value="G3LPt224J1nWetekvWMvJNRj64D3Oy8X5nSNnsmabg062BAs9HCtqAbV8hOALVt5" />
    <!--<add key="SpectraAPIKey" value="jnwhQHGHcOMflvlsET+NPKFoBndALMe7mLMbIB1dTdb0LuAG5bo483VfJNs10/ZH"/>-->
    <!--<add key="SpectraAPIURL" value="https://localhost:44375/api/V1/"/>-->
    <add key="SpectraAPIURL" value="https://cashless-api-qa.fhpl.net/api/v1/" />
    <add key="reliance_nonAPI_policies" value="" />
    <add key="NewProviderUploadPath" value="" />
    <add key="BulkRejectionMaxCount" value="100" />
    <add key="UploadFlaggingFilePath" value="C:/UploadFlaggingFilePath/UploadFlaggingFile" />
    <add key="BulkModificationDropDownAccess" value="1,2,3,33,11332" />
    <add key="Auditreportspath" value="" />
    <add key="Base64toPDFURL" value="https://nhcx-tpa-qa.fhpl.net/" />
    <add key="Reliance_Apiurl" value="https://tpa.brobotinsurance.com/SyncupService/" />
    <add key="Reliance_Apiurl_token" value="https://tpa.brobotinsurance.com/AuthService/connect/token" />
    <add key="HideConcurrentLoginFunc" value="false" />
    <add key="TwoFDFlagInternalUsers" value="false" />
    <add key="OtpTimer" value="2" />
	  <add key="DMSApiURL" value="https://nxtgen-dms-api-qa.fhpl.net/" />
	  <add key="ClientID" value="Test" />
	  <add key="DMSAPIKey" value="WWGurkkutK8F5Lpf9WGnnOUAFePbSObpi4m2Pq8w6xk=" />
	  <add key="MedicalBillDocumentPath" value="C:\Users\satyavineel.k\Desktop\MedicalBillReal.pdf"/>
	  <add key="TariffDocumentPath" value="C:\Users\satyavineel.k\Desktop\TariffBillReal.pdf" />
	  <add key="BenefitPlanDocumentPath" value="C:\Users\satyavineel.k\Desktop\sampleBenefitPlan.pdf" />
	  <!--SMS-->
    <add key="SMSBaseURL" value="https://enterprise.smsgupshup.com/GatewayAPI/rest" />
    <add key="SMSUsername" value="2000241008" />
    <add key="SMSPassword" value="nyAC!yNk" />

    <add key="InternalUsersFileUploadLimitPer5Mins" value="100" />
    <add key="InternalUsersFileUploadLimitPerDay" value="2000" />
    <add key="ExternalUsersFileUploadLimitPerDay" value="100" />
    <!-- GoDigit,IffcoTokyo-->
    <!-- CSP -->
    <add key="CSP_ImgSrc" value="'self' data: https://webshare.fhpl.net" />

    <add key="CSP_ScriptSrc" value="'self' 'unsafe-inline' 'unsafe-eval' https://static.site24x7rum.in http://static.site24x7rum.in https://static.cloudflareinsights.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net" />

    <add key="CSP_StyleSrc" value="'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net" />

    <add key="CSP_FontSrc" value="'self' https://cdnjs.cloudflare.com" />

    <add key="CSP_ConnectSrc" value="             'self' https://enterprise.smsgupshup.com https://enterprise.webaroo.com https://nhcx-tpa-qa.fhpl.net https://nhcx-api.fhpl.net https://nxtgen-dms-api-qa.fhpl.net https://nxtgen-api.fhpl.net https://cashless-api-qa-v1.fhpl.net https://spectra-app-qa-v9.fhpl.net https://uat-spectra.fhpl.net https://spectraqa.fhpl.net https://webshare.fhpl.net https://www.ackodev.com https://magmahealth.magma-hdi.co.in https://fhpl.co https://col.site24x7rum.in https://calm-opossum-78.convex.site https://calm-opossum-78.convex.cloud http://localhost:3000         " />

    <add key="CSP_FrameSrc" value="'self' https://nxtgen-dms-scn-qa.fhpl.net http://localhost:3000" />
  </appSettings>
  <system.web>
    <authentication mode="Forms">
      <forms loginUrl="Account/MCareLogin" protection="All" timeout="30" name=".ASPXAUTH" path="/" requireSSL="false" slidingExpiration="true" defaultUrl="Home/Index" cookieless="UseDeviceProfile" enableCrossAppRedirects="false" />
    </authentication>
    <compilation debug="true" targetFramework="4.5.2">
      <assemblies>
        <add assembly="netstandard, Version=2.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51" />
      </assemblies>
    </compilation>
    <httpRuntime enableVersionHeader="false" targetFramework="4.5" maxRequestLength="1073741824" maxQueryStringLength="32768" maxUrlLength="65536" executionTimeout="180" />
    <sessionState timeout="30" />
    <!--<customErrors mode="Off" defaultRedirect="Error.html" />-->
    <httpModules>
      <add name="ErrorLog" type="Elmah.ErrorLogModule, Elmah" />
      <add name="ErrorMail" type="Elmah.ErrorMailModule, Elmah" />
      <add name="ErrorFilter" type="Elmah.ErrorFilterModule, Elmah" />
      <!--<add name="ApplicationInsightsWebTracking" type="Microsoft.ApplicationInsights.Web.ApplicationInsightsHttpModule, Microsoft.AI.Web" />-->
      <add name="TelemetryCorrelationHttpModule" type="Microsoft.AspNet.TelemetryCorrelation.TelemetryCorrelationHttpModule, Microsoft.AspNet.TelemetryCorrelation" />
      <add name="ApplicationInsightsWebTracking" type="Microsoft.ApplicationInsights.Web.ApplicationInsightsHttpModule, Microsoft.AI.Web" />
    </httpModules>
  </system.web>
  <system.web.extensions>
    <scripting>
      <webServices>
        <jsonSerialization maxJsonLength="2147483647" />
      </webServices>
    </scripting>
  </system.web.extensions>
  <system.webServer>
    <httpProtocol>
      <!-- Security Hardening of HTTP response headers -->
      <customHeaders>
        <!-- Remove x-powered-by in the response header, required by OWASP A5:2017 - Do not disclose web server configuration -->
        <remove name="X-Powered-By" />
      </customHeaders>
    </httpProtocol>
    <modules>
      <remove name="FormsAuthenticationModule" />
      <add name="ErrorLog" type="Elmah.ErrorLogModule, Elmah" preCondition="managedHandler" />
      <add name="ErrorMail" type="Elmah.ErrorMailModule, Elmah" preCondition="managedHandler" />
      <add name="ErrorFilter" type="Elmah.ErrorFilterModule, Elmah" preCondition="managedHandler" />
      <!--<remove name="ApplicationInsightsWebTracking" />
      <add name="ApplicationInsightsWebTracking" type="Microsoft.ApplicationInsights.Web.ApplicationInsightsHttpModule, Microsoft.AI.Web" preCondition="managedHandler" />-->
      <remove name="TelemetryCorrelationHttpModule" />
      <add name="TelemetryCorrelationHttpModule" type="Microsoft.AspNet.TelemetryCorrelation.TelemetryCorrelationHttpModule, Microsoft.AspNet.TelemetryCorrelation" preCondition="managedHandler" />
      <remove name="ApplicationInsightsWebTracking" />
      <add name="ApplicationInsightsWebTracking" type="Microsoft.ApplicationInsights.Web.ApplicationInsightsHttpModule, Microsoft.AI.Web" preCondition="managedHandler" />
    </modules>
    <security>
      <requestFiltering>
        <requestLimits maxAllowedContentLength="1073741824" maxQueryString="32768" maxUrl="65536" />
      </requestFiltering>
    </security>
    <validation validateIntegratedModeConfiguration="false" />
    <handlers>
      <remove name="ExtensionlessUrlHandler-Integrated-4.0" />
      <remove name="OPTIONSVerbHandler" />
      <remove name="TRACEVerbHandler" />
      <add name="ExtensionlessUrlHandler-Integrated-4.0" path="*." verb="*" type="System.Web.Handlers.TransferRequestHandler" preCondition="integratedMode,runtimeVersionv4.0" />
    </handlers>
  </system.webServer>
  <runtime>
    <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
      <dependentAssembly>
        <assemblyIdentity name="WebGrease" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="0.0.0.0-1.6.5135.21930" newVersion="1.6.5135.21930" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Antlr3.Runtime" publicKeyToken="eb42632606e9261f" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-3.5.0.2" newVersion="3.5.0.2" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Microsoft.AspNet.Identity.Core" publicKeyToken="31bf3856ad364e35" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-2.0.0.0" newVersion="2.0.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Microsoft.Owin" publicKeyToken="31bf3856ad364e35" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-3.0.1.0" newVersion="3.0.1.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Microsoft.Owin.Security" publicKeyToken="31bf3856ad364e35" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-3.0.1.0" newVersion="3.0.1.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Microsoft.Owin.Security.Cookies" publicKeyToken="31bf3856ad364e35" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-3.0.1.0" newVersion="3.0.1.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Newtonsoft.Json" publicKeyToken="30ad4fe6b2a6aeed" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-9.0.0.0" newVersion="9.0.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Microsoft.Owin.Security.OAuth" publicKeyToken="31bf3856ad364e35" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-3.0.1.0" newVersion="3.0.1.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Web.Helpers" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="1.0.0.0-3.0.0.0" newVersion="3.0.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Web.WebPages" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="1.0.0.0-3.0.0.0" newVersion="3.0.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Web.Mvc" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="0.0.0.0-5.2.3.0" newVersion="5.2.3.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Runtime.CompilerServices.Unsafe" publicKeyToken="b03f5f7f11d50a3a" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-5.0.0.0" newVersion="5.0.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Buffers" publicKeyToken="cc7b13ffcd2ddd51" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-4.0.3.0" newVersion="4.0.3.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Diagnostics.DiagnosticSource" publicKeyToken="cc7b13ffcd2ddd51" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-5.0.0.0" newVersion="5.0.0.0" />
      </dependentAssembly>
    </assemblyBinding>
  </runtime>
  <entityFramework>
    <defaultConnectionFactory type="System.Data.Entity.Infrastructure.LocalDbConnectionFactory, EntityFramework">
      <parameters>
        <parameter value="v11.0" />
      </parameters>
    </defaultConnectionFactory>
    <providers>
      <provider invariantName="System.Data.SqlClient" type="System.Data.Entity.SqlServer.SqlProviderServices, EntityFramework.SqlServer" />
    </providers>
  </entityFramework>
  <log4net>
    <appender name="FileAppender" type="log4net.Appender.RollingFileAppender">
      <!--<file type="log4net.Util.PatternString" value="D:/paypal/logs/gateway_%date{yyyyMMdd}.log" />-->
      <file value="LOG/MyLogger_.log" />
      <appendToFile value="true" />
      <rollingStyle value="Date" />
      <datePattern value="yyyyMMdd'.log'" />
      <layout type="log4net.Layout.PatternLayout">
        <conversionPattern value="%date [%thread] %-5level - %message%newline" />
      </layout>
    </appender>
    <root>
      <level value="ALL" />
      <appender-ref ref="FileAppender" />
    </root>
  </log4net>
  <elmah>
    <errorLog type="Elmah.XmlFileErrorLog, Elmah" logPath="~/Logs" />
    <!--
        See http://code.google.com/p/elmah/wiki/SecuringErrorLogPages for 
        more information on remote access and securing ELMAH.
    -->
    <security allowRemoteAccess="yes" />
    <!--<security allowRemoteAccess="false" />-->
  </elmah>
  <location path="elmah.axd" inheritInChildApplications="false">
    <system.web>
      <httpHandlers>
        <add verb="POST,GET,HEAD" path="elmah.axd" type="Elmah.ErrorLogPageFactory, Elmah" />
      </httpHandlers>
      <!-- 
        See http://code.google.com/p/elmah/wiki/SecuringErrorLogPages for 
        more information on using ASP.NET authorization securing ELMAH.

      <authorization>
        <allow roles="admin" />
        <deny users="*" />  
      </authorization>
      -->
      <!--<authorization>
    <allow roles="admin" />  
    <allow roles="dev" />  
    <deny users="*" /> 
          </authorization>-->
      <authorization>
        <allow users="administrator" />
        <deny users="*" />
      </authorization>
    </system.web>
    <system.webServer>
      <handlers>
        <add name="ELMAH" verb="POST,GET,HEAD" path="elmah.axd" type="Elmah.ErrorLogPageFactory, Elmah" preCondition="integratedMode" />
      </handlers>
    </system.webServer>
  </location>
  <system.serviceModel>
    <bindings>
      <basicHttpBinding>
        <binding name="ServiceSoap">
          <security mode="Transport" />
        </binding>
        <binding name="ServiceSoap1" />
        <binding name="ClaimIdUpdateSoapBinding" />
      </basicHttpBinding>
    </bindings>
    <client>
      <endpoint address="https://demo.fhpl.net/FeedBackService/service.asmx" binding="basicHttpBinding" bindingConfiguration="ServiceSoap" contract="FeedbackService.ServiceSoap" name="ServiceSoap" />
      <endpoint address="http://FHPL-DMSUAT:8080/NGFHPLWS/ClaimIdUpdate" binding="basicHttpBinding" bindingConfiguration="ClaimIdUpdateSoapBinding" contract="ClaimIdUpdateService.fhplService" name="fhplServicePort" />
    </client>
  </system.serviceModel>
</configuration>
