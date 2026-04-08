DECLARE @TableName NVARCHAR(128) = 'YourTableName';
DECLARE @SearchValue NVARCHAR(100) = 'YourSearchText';

DECLARE @SQL NVARCHAR(MAX) = '';

SELECT @SQL = STRING_AGG(
    'SELECT ''' + COLUMN_NAME + ''' AS ColumnName 
     FROM ' + @TableName + ' 
     WHERE [' + COLUMN_NAME + '] LIKE ''%' + @SearchValue + '%''',
    ' UNION ALL '
)
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = @TableName
AND DATA_TYPE IN ('varchar', 'nvarchar', 'char', 'nchar', 'text', 'ntext');

EXEC(@SQL);








SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'Claimsdetails'
AND COLUMN_NAME LIKE '%Doctor%' 
   OR COLUMN_NAME LIKE '%Remark%'
   OR COLUMN_NAME LIKE '%Note%'
   OR COLUMN_NAME LIKE '%Process%'
ORDER BY COLUMN_NAME

[ClaimAI] sending setClinicalDetails, processingRemarks: Hello There
Index:16356 [ClaimAI] processingRemarks received: Hello There
Index:16359 [ClaimAI] txtDoctorRemarks set to: Hello There


1. Presenting complaint should come from the medical document if there is any. and on click of save it should get populated into the field.
2. Processing remarks tab should be there just like presenting complaint and the matter typed there should be saved in Processing remarks tab inside hospitalization details.
3. Doctor notes separate tab should be there and it is getting populated somewhere from the code and db. find that and populate it on the top -> just bring that section which is there in claim actions -> adjudication process -> doctor notes , bring it to the top. when we type anything in this box, should reflect in the doctor notes box again.
4. Bill Amount should be adjuetsed. keep all fields zero , in othere tab add BillAmount = Medical Bill extracted , deductions = max(Medical Bill - Tariff bill,0) and give deductions reason = Tariff exceeded.
