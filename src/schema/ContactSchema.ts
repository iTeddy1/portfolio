import { z } from "zod";

export const ContactSchema = z.object({
  fullName: z.string().trim().min(3, "Full name must contain at least 3 characters!"),
  email: z.string().trim().email({ message: "Email is not valid." }),
  message: z.string().trim().min(10, "Message must contain at least 10 characters!"),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
