import { AtIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { contact } from "@/config/contact";
import { getContent } from "@/lib/preferences";

// Three white cards: phone, email and head office, each with a round icon on top.
export async function ContactChannels() {
  const { contactPage } = await getContent();
  const { channels } = contactPage;

  const items = [
    { Icon: PhoneIcon, title: channels.phone.title, main: contact.phone, detail: channels.phone.detail, href: contact.phoneHref },
    { Icon: AtIcon, title: channels.email.title, main: channels.email.main, detail: contact.email, href: `mailto:${contact.email}` },
    { Icon: MapPinIcon, title: channels.office.title, main: channels.office.main, detail: channels.office.detail, href: "#mapa" },
  ];

  return (
    <section data-theme="light" aria-label={channels.label} className="bg-bg pt-16 text-fg">
      <ul className="container-site grid gap-6 md:grid-cols-3 lg:gap-10">
        {items.map(({ Icon, title, main, detail, href }) => (
          <li key={title}>
            <a
              href={href}
              className="group block rounded-[24px] bg-card px-6 py-6 text-center shadow-[0_14px_30px_-18px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-[0_24px_44px_-22px_rgba(163,17,28,0.4)]"
            >
              <span className="mx-auto grid size-[50px] place-items-center rounded-full bg-red/10 text-fg transition-colors group-hover:bg-red group-hover:text-white">
                <Icon className="size-5" />
              </span>
              <span className="mt-2 block text-[18px] text-fg">{title}</span>
              <span className="mt-2 block text-[16px] text-fg">{main}</span>
              <span className="mt-1 block text-[12px] font-semibold text-fg">{detail}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
