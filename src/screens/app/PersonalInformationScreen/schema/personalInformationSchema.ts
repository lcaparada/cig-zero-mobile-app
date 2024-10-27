import { z } from "zod";

export const personalInformationSchema = z.object({
  name: z.string(),
});

export type PersonalInformationSchemaType = z.infer<
  typeof personalInformationSchema
>;
