import { z } from "zod";

export const editProfileScreenSchema = z.object({
  name: z.string().min(3, "Campo obrigatório"),
  bio: z.string(),
  location: z.string(),
});

export type EditProfileScreenSchemaType = z.infer<
  typeof editProfileScreenSchema
>;
