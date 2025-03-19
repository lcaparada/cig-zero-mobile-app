import { z } from "zod";

export const editProfileScreenSchema = z.object({
  bio: z.string(),
  location: z.string(),
});

export type EditProfileScreenSchemaType = z.infer<
  typeof editProfileScreenSchema
>;
