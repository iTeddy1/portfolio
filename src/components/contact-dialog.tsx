'use client'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, MessageSquare, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useCallback, useState } from 'react'

// Zod v4 schema for contact form validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters long',
    })
    .max(50, {
      message: 'Name must not exceed 50 characters',
    }),
  email: z
    .email({
      message: 'Please enter a valid email address',
    })
    .min(5, {
      message: 'Email must be at least 5 characters long',
    })
    .max(100, {
      message: 'Email must not exceed 100 characters',
    }),
  subject: z
    .string()
    .min(5, {
      message: 'Subject must be at least 5 characters long',
    })
    .max(100, {
      message: 'Subject must not exceed 100 characters',
    }),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters long',
    })
    .max(1000, {
      message: 'Message must not exceed 1000 characters',
    }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

interface ContactDialogProps {
  children?: React.ReactNode
}

export function ContactDialog({ children }: ContactDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = useCallback(
    async (values: ContactFormValues) => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available')
        toast.error('reCAPTCHA not available. Please try again.')
        return
      }

      setIsSubmitting(true)

      try {
        // Wait a moment to ensure reCAPTCHA is ready
        await new Promise((resolve) => setTimeout(resolve, 100))

        // Execute reCAPTCHA to get token with a simple action name
        const recaptchaToken = await executeRecaptcha('submit')

        if (!recaptchaToken) {
          toast.error('Failed to verify reCAPTCHA. Please try again.')
          setIsSubmitting(false)
          return
        }

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...values,
            recaptchaToken,
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message')
        }

        // Reset form and close dialog on success
        form.reset()
        setIsOpen(false)
        toast.success('Message sent successfully! I will get back to you soon.')
      } catch (error) {
        console.error('Failed to send message:', error)
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again.'
        toast.error(errorMessage)
      } finally {
        setIsSubmitting(false)
      }
    },
    [executeRecaptcha, form],
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <div
            aria-label="Open contact dialog"
            className="hover:border-border rounded-base flex min-w-[85px] items-center gap-2 px-2 py-1 whitespace-nowrap transition-colors hover:border-2"
          >
            Contact
          </div>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Get in Touch
          </DialogTitle>
          <DialogDescription>
            Send me a message and I&apos;ll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="text-foreground/50 absolute top-3 left-3 h-4 w-4" />
                      <Input
                        placeholder="Your full name"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="text-foreground/50 absolute top-3 left-3 h-4 w-4" />
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="What's this about?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Tell me more about your project, questions, or how I can help..."
                      className="rounded-base border-border bg-secondary-background selection:bg-main selection:text-main-foreground font-base text-foreground placeholder:text-foreground/50 flex min-h-[100px] w-full resize-none border-2 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="neutral"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="min-w-[120px]"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="border-main-foreground h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <Mail className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
