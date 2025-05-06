import { zodSchemas } from "@/form";
import { z } from "zod";

const { name, email, password } = zodSchemas;

export const signUpFormSchema = z
  .object({
    name,
    email,
    password,
    confirmPassword: z.string().min(8, "Confirm password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords not match",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpFormSchema>;
