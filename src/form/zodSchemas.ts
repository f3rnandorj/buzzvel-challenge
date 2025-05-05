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

const password = z
  .string({ required_error: "Senha obrigatória" })
  .min(8, "Senha deve ter pelo menos 8 caracteres")
  .max(50, "Senha muito longa");

const name = z
  .string({ required_error: "Nome obrigatório" })
  .min(2, "Nome muito curto. Mínimo de 2 caracteres")
  .max(50, "Nome muito longo. Máximo de 50 caracteres")
  .trim();

export const zodSchemas = {
  email,
  message,
  password,
  name,
};
