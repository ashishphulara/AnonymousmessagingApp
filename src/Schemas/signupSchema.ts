import { z } from "zod";

export const UsernameValidations = z
  .string()
  .min(2, "username must be at least 2 characters")
  .max(20, "username must be at least 20 characters")
  .regex(/^[^A-Za-z0-9_]+$/, "username must not contain special characters");

export const SignupSchema = z.object({
  username: UsernameValidations,
  email: z.string().email({ message: "please enter your email address" }),
  password: z
    .string()
    .min(6, { message: "your password must be at least 6 characters" })
    .max(12, { message: "your password must be at least 12 characters" }),
});
