import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="h-[100dvh]">
      <div className="mx-16">
        <div className="flex items-center gap-5 py-[80px]">
          <h2 className="text-6xl font-extrabold">Get in touch</h2>
          <div className="h-1 min-w-0 flex-grow bg-black"></div>
        </div>
        <div className="md:flex  justify-between">
          <div className="md:max-w-[40%] mb-4">
            <h3 className="text-2xl font-bold">Have a question or want to work together?</h3>
            <p className="text-wrap">
              I'm open to new opportunities and look forward to connecting with you. Whether you have inquiries or just
              want to say hello, feel free to reach out. I'll do my best to respond promptly!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
