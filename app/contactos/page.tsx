import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactChannels } from "@/components/sections/contact/ContactChannels";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactMap } from "@/components/sections/contact/ContactMap";
import { ContactMessage } from "@/components/sections/contact/ContactMessage";
import { getContent } from "@/lib/preferences";

export async function generateMetadata(): Promise<Metadata> {
  const { contactPage } = await getContent();
  return { title: contactPage.meta.title, description: contactPage.meta.description };
}

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactHero />
      <ContactMessage />
      <ContactChannels />
      <ContactMap />
    </SiteShell>
  );
}
