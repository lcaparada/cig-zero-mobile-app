import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Por favor, insira um endereço de e-mail válido" }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
