import { getContent } from "@/lib/preferences";
import { ContactForm } from "./ContactForm";
import { NewsletterCard } from "./NewsletterCard";

// Message form on the left, newsletter card on the right with two decorative circles under it.
export async function ContactMessage() {
  const { contactPage } = await getContent();

  return (
    <section id="mensagem" data-theme="light" aria-label={contactPage.form.title} className="overflow-x-clip bg-bg pt-20 text-fg lg:pt-24">
      <div className="container-site grid items-start gap-12 lg:grid-cols-[1.3fr_0.8fr] lg:gap-[8%]">
        <ContactForm t={contactPage.form} />

        <div className="relative pb-28">
          <NewsletterCard t={contactPage.newsletter} />
          <span aria-hidden="true" className="absolute bottom-0 right-6 size-24 rounded-full bg-[#141416]" />
          <span aria-hidden="true" className="absolute bottom-10 right-0 size-20 rounded-full bg-red" />
        </div>
      </div>
    </section>
  );
}
