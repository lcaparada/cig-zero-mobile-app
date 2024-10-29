import { z } from "zod";

export const reportAnIssueScreenSchema = z.object({
  issueTitle: z.string().min(1, "Issue title is required"),
  issueDescription: z.string().min(1, "Issue description is required"),
});

export type ReportAnIssueScreenSchemaType = z.infer<
  typeof reportAnIssueScreenSchema
>;
