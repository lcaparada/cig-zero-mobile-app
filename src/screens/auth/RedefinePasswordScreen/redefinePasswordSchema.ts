import { z } from "zod";

export const redefinePasswordSchema = z.object({
  email: z.string().email("Por favor, insira um endereço de e-mail válido"),
});

export type RedefinePasswordSchemaType = z.infer<typeof redefinePasswordSchema>;
