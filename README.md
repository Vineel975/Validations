GetMedicalBillDocument response: true Medical bill loaded from zip. Files: 2 | MergedSize: 8.88MB
Index:14862 [ClaimAI] Medical bill loaded. File: 26041406227-medicalbill.pdf Size(chars): 12419608



[ClaimAI] Coding save failed: Error While Inserting Data into Staging Table. Trying to pass a table-valued parameter with 36 column(s) where the corresponding user-defined table type requires 35 column(s).


-- Check what columns the TVP type has
SELECT c.name, c.column_id, t.name as type
FROM sys.table_types tt
JOIN sys.columns c ON c.object_id = tt.type_table_object_id
JOIN sys.types t ON t.user_type_id = c.user_type_id
WHERE tt.name LIKE '%Coding%'
ORDER BY c.column_id

TPAProcedureID	1	int
TPALevel1	2	int
TPALevel2	3	int
TPALevel3	4	int
PackageRate	5	money
PackageRatio	6	decimal
TreatementTypeID_19	7	int
isGipsa	8	bit
isDayCare	9	bit
isCI	10	bit
isPED	11	bit
TypeOfAnesthesiaID	12	tinyint
Exclusions	13	varchar
SurgeryDate	14	datetime
BillAmount	15	money
DisallowedAmount	16	money
DisallowedReasonIDs	17	varchar
PayableAmount	18	money
BufferAmount	19	money
AdditionalreasonIDs	20	varchar
Discount	21	money
Copay	22	money
Remarks	23	varchar
ICDCode	24	int
PCSCode	25	varchar
PCSDescription	26	varchar
EligibleAmount	27	money
AdditionalAmount	28	money
BPCoverageLimit	29	money
ProcessHTML	30	varchar
Overridepackage	31	bit
Overridesuminsured	32	bit
PolicySublimit	33	money
AlimentExpression	34	int
Alimentpower	35	decimal
