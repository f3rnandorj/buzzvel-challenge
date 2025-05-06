import { zodSchemas } from "@/form";
import { z } from "zod";

const { email, password } = zodSchemas;

export const signInFormSchema = z.object({
  email,
  password,
});

export type SignInFormData = z.infer<typeof signInFormSchema>;
