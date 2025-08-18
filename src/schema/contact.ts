import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.email().min(5).max(100),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
  recaptchaToken: z.string().min(1),
})

export { contactSchema }
