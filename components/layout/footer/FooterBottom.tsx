import { ArrowUpIcon } from "@/components/icons";
import type { Content } from "@/config/content";

type FooterBottomProps = {
  rights: string;
  legal: Content["footer"]["legal"];
  backToTop: string;
};

export function FooterBottom({ rights, legal, backToTop }: FooterBottomProps) {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-5 border-t border-line py-7 text-[14px] text-subtle md:flex-row md:items-center md:justify-between">
      <p>
        © {year} Radical dev. {rights}
      </p>

      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {legal.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="transition hover:text-red">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#top" className="group inline-flex items-center gap-2 font-medium text-fg transition hover:text-red">
        {backToTop}
        <span className="grid size-9 place-items-center rounded-full border border-line transition group-hover:-translate-y-1 group-hover:border-red group-hover:bg-red group-hover:text-white">
          <ArrowUpIcon className="size-4" />
        </span>
      </a>
    </div>
  );
}
