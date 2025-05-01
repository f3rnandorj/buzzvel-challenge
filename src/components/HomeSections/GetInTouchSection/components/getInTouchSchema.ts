import { z } from "zod";
import { zodSchemas } from "@/form";

const { email, message } = zodSchemas;

export type GetInTouchFormData = z.infer<typeof getInTouchFormSchema>;
export const getInTouchFormSchema = z.object({
  email,
  message,
});
