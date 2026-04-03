✖ Schema validation failed.
Document with ID "jh77zzzz9ewfx8nj2hewqk6zrn845wqe" in table "processJob" does not match the schema: Object contains extra field `spectraFields` that is not in the validator.

Object: {claimId: "26032706190", completed: 1.0, errorCount: 0.0, isComplete: true, spectraFields: {admissionDate: "2026-03-26T00:00:00", patientGender: "2", patientName: "Kanchan Singh (Female)"}, status: "completed", successCount: 1.0, total: 1.0, totalCompletionTokens: 1073.0, totalCost: 0.013740000000000002, totalPromptTokens: 21042.0, totalTokens: 22115.0}
Validator: v.object({claimId: v.optional(v.string()), completed: v.float64(), error: v.optional(v.string()), errorCount: v.float64(), isComplete: v.boolean(), status: v.string(), successCount: v.float64(), total: v.float64(), totalCompletionTokens: v.float64(), totalCost: v.float64(), totalPromptTokens: v.float64(), totalTokens: v.float64()})


line 855 : Property 'spectraFields' does not exist on type '{ _id: Id<"processJob">; status: string; completed: number; total: number; successCount: number; errorCount: number; totalCost: number; totalTokens: number; totalPromptTokens: number; totalCompletionTokens: number; ... 5 more ...; logs: { ...; }[]; }'.ts(2339)

line 698 : Type '{ field: "patientName" | "patientAge" | "patientGender" | "policyNumber" | "hospitalName" | "admissionDate" | "documentDate"; label: string; aiValue: string | number | null; dbValue: string; isMatch: boolean; aiSource: string; dbSource: string; }[]' is not assignable to type 'PatientValidationField[]'.
  Type '{ field: "patientName" | "patientAge" | "patientGender" | "policyNumber" | "hospitalName" | "admissionDate" | "documentDate"; label: string; aiValue: string | number | null; dbValue: string; isMatch: boolean; aiSource: string; dbSource: string; }' is not assignable to type 'PatientValidationField'.
    Types of property 'field' are incompatible.
      Type '"patientName" | "patientAge" | "patientGender" | "policyNumber" | "hospitalName" | "admissionDate" | "documentDate"' is not assignable to type '"patientName" | "patientAge" | "patientGender" | "policyNumber"'.
        Type '"hospitalName"' is not assignable to type '"patientName" | "patientAge" | "patientGender" | "policyNumber"'.ts(2322)

