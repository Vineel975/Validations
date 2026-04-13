public string GeneratePresignedURL(string bucketName, string objectKey, double duration)
{
    string urlString = string.Empty;
    try
    {
        using (IAmazonS3 s3Client = new AmazonS3Client(ProviderDocbucketRegion))
        {
            S3DirectoryInfo s3DirectoryInfo = new Amazon.S3.IO.S3DirectoryInfo(s3Client, bucketName);
            S3FileInfo s3FileInfo = s3DirectoryInfo.GetFile(objectKey);
            if (s3FileInfo != null && s3FileInfo.Exists)
            {
                var client = new AmazonS3Client(ProviderDocbucketRegion);
                var request = new GetPreSignedUrlRequest()
                {
                    BucketName = bucketName,
                    Key = objectKey,
                    Expires = DateTime.Now.AddMinutes(duration),
                };
                urlString = client.GetPreSignedURL(request);
            }
        }
    }
    catch (AmazonS3Exception ex)
    {
        Console.WriteLine($"Error:'{ex.Message}'");
    }
    return urlString;
}
