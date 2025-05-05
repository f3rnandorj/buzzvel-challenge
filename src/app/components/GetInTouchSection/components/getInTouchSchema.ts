import { zodSchemas } from "@/form";
import { z } from "zod";

const { email, message } = zodSchemas;

export const getInTouchFormSchema = z.object({
  email,
  message,
});

export type GetInTouchFormData = z.infer<typeof getInTouchFormSchema>;
