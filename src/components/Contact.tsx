import { ContactForm } from "./ContactForm";
import SectionDivide from "./SectionDivide";

export default function Contact() {
  return (
    <section id="contact" className="h-[100dvh]">
      <div className="mx-16">
        <SectionDivide sectionName="Contact" />
        <div className="justify-between lg:flex">
          <div className="mb-4 lg:max-w-[40%]">
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
