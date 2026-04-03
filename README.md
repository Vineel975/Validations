line 855 : Property 'spectraFields' does not exist on type '{ _id: Id<"processJob">; status: string; completed: number; total: number; successCount: number; errorCount: number; totalCost: number; totalTokens: number; totalPromptTokens: number; totalCompletionTokens: number; ... 5 more ...; logs: { ...; }[]; }'.ts(2339)

line 698 : Type '{ field: "patientName" | "patientAge" | "patientGender" | "policyNumber" | "hospitalName" | "admissionDate" | "documentDate"; label: string; aiValue: string | number | null; dbValue: string; isMatch: boolean; aiSource: string; dbSource: string; }[]' is not assignable to type 'PatientValidationField[]'.
  Type '{ field: "patientName" | "patientAge" | "patientGender" | "policyNumber" | "hospitalName" | "admissionDate" | "documentDate"; label: string; aiValue: string | number | null; dbValue: string; isMatch: boolean; aiSource: string; dbSource: string; }' is not assignable to type 'PatientValidationField'.
    Types of property 'field' are incompatible.
      Type '"patientName" | "patientAge" | "patientGender" | "policyNumber" | "hospitalName" | "admissionDate" | "documentDate"' is not assignable to type '"patientName" | "patientAge" | "patientGender" | "policyNumber"'.
        Type '"hospitalName"' is not assignable to type '"patientName" | "patientAge" | "patientGender" | "policyNumber"'.ts(2322)

