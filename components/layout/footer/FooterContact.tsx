import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { contact } from "@/config/contact";
import { FooterHeading } from "./FooterHeading";

type FooterContactProps = { title: string; hours: string };

export function FooterContact({ title, hours }: FooterContactProps) {
  const items = [
    { Icon: MapPinIcon, text: contact.address },
    { Icon: MailIcon, text: contact.email, href: `mailto:${contact.email}` },
    { Icon: PhoneIcon, text: contact.phone, href: contact.phoneHref },
    { Icon: ClockIcon, text: hours },
  ];

  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <address className="mt-5 space-y-3.5 not-italic">
        {items.map(({ Icon, text, href }) => (
          <p key={text} className="flex items-center gap-3 text-[15px] text-muted">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-red/10 text-red">
              <Icon className="size-[17px]" />
            </span>
            {href ? (
              <a href={href} className="transition hover:text-red">
                {text}
              </a>
            ) : (
              text
            )}
          </p>
        ))}
      </address>
    </div>
  );
}
