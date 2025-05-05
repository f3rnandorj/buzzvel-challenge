import { zodSchemas } from "@/form";
import { z } from "zod";

const { name, email, password } = zodSchemas;

export const signUpFormSchema = z
  .object({
    name,
    email,
    password,
    confirmPassword: z.string().min(8, "Confirme a senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpFormSchema>;
