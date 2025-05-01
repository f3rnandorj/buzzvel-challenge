import { z } from "zod";

const email = z
  .string({ required_error: "Email obrigatório" })
  .min(1, "Email obrigatório")
  .email("Email inválido")
  .trim()
  .transform((email) => email.toLowerCase());

const message = z
  .string({ required_error: "Mensagem obrigatória" })
  .min(10, "Mensagem muito curta. Mínimo de 10 caracteres")
  .max(500, "Mensagem muito longa. Máximo de 500 caracteres")
  .trim()
  .transform((message) => message.replace(/\s+/g, " "));

export const zodSchemas = {
  email,
  message,
};
