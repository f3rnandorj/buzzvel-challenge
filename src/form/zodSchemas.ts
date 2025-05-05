import { z } from "zod";

const email = z
  .string({ required_error: "Email is required" })
  .min(1, "Email is required")
  .email("Invalid email")
  .trim()
  .transform((email) => email.toLowerCase());

const message = z
  .string({ required_error: "Message is required" })
  .min(10, "Message is too short. Minimum of 10 characters")
  .max(500, "Message is too long. Maximum of 500 characters")
  .trim()
  .transform((message) => message.replace(/\s+/g, " "));

const password = z
  .string({ required_error: "Password is required" })
  .min(8, "Password must have at least 8 characters")
  .max(50, "Password is too long");

const name = z
  .string({ required_error: "Name is required" })
  .min(2, "Name is too short. Minimum of 2 characters")
  .max(50, "Name is too long. Maximum of 50 characters")
  .trim();

export const zodSchemas = {
  email,
  message,
  password,
  name,
};
