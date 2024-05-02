import { z } from "zod";

export const MessageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "content must not be less 10 characters" })
    .max(300, { message: "content must not be greater than 300 characters" }),
});
