import { location } from "@/config/contact";
import { getContent } from "@/lib/preferences";

// Satellite Google Map of the head office (lazy-loaded, no API key).
export async function ContactMap() {
  const { contactPage } = await getContent();

  return (
    <section id="mapa" data-theme="light" aria-label={contactPage.map.title} className="bg-bg pb-24 pt-24 text-fg lg:pt-32">
      <div className="container-site">
        <iframe
          src={location.embedUrl}
          title={contactPage.map.title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[360px] w-full border-0 sm:h-[460px]"
        />
      </div>
    </section>
  );
}
