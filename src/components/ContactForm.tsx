import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { ContactSchema, ContactSchemaType } from "@/schema/ContactSchema";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const form = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactSchemaType) => {
    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, data, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });
      alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the email. Please try again later.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 rounded-xl border-2 border-borders bg-bgLight p-4 dark:border-borders-dark dark:bg-bgDark lg:w-[40%]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              {/* <FormLabel className={fieldState.error ? "text-bgDark dark:text-bgLight" : ""}>Your email</FormLabel> */}
              <FormControl>
                {/* <Label htmlFor="email" className="sr-only">s</Label> */}
                <Input
                  placeholder="Your email"
                  {...field}
                  aria-describedby="email"
                  className="border border-borders dark:border-borders-dark"
                />
              </FormControl>
              {fieldState.error && (
                <FormMessage className="dark:text-[#F0A0A0]">{fieldState.error.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field, fieldState }) => (
            <FormItem>
              {/* <FormLabel className={fieldState.error ? "text-bgDark dark:text-bgLight" : ""}>Name</FormLabel> */}
              <FormControl>
                <Input placeholder="Name" {...field} className="border border-borders dark:border-borders-dark" />
              </FormControl>

              {fieldState.error && (
                <FormMessage className="dark:text-[#F0A0A0]">{fieldState.error.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem>
              {/* <FormLabel className={fieldState.error ? "text-bgDark dark:text-bgLight" : ""}>Message</FormLabel> */}
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
                  {...field}
                  className="border border-borders dark:border-borders-dark"
                />
              </FormControl>
              {fieldState.error && (
                <FormMessage className="dark:text-[#F0A0A0]">{fieldState.error.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <Button type="submit">Send message</Button>
      </form>
    </Form>
  );
}
