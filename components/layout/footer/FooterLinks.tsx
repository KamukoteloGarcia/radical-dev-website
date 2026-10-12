import type { Content } from "@/config/content";
import { FooterHeading } from "./FooterHeading";

type FooterLinksProps = { column: Content["footer"]["columns"][number] };

export function FooterLinks({ column }: FooterLinksProps) {
  return (
    <nav aria-label={column.title}>
      <FooterHeading>{column.title}</FooterHeading>
      <ul className="mt-5 space-y-3">
        {column.links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="inline-flex text-[15px] text-muted transition hover:translate-x-1 hover:text-red"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
