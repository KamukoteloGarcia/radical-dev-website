import type { Content } from "@/config/content";
import { cn } from "@/lib/cn";

type NavLinksProps = {
  links: Content["links"];
  vertical?: boolean;
  onNavigate?: () => void;
};

export function NavLinks({ links, vertical = false, onNavigate }: NavLinksProps) {
  return (
    <ul className={cn("flex", vertical ? "flex-col" : "items-center gap-8 xl:gap-10")}>
      {links.map(({ label, href }, i) => {
        const isActive = i === 0;
        return (
          <li key={href}>
            <a
              href={href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "text-[16px] transition-colors hover:text-red",
                vertical && "block py-3 text-[17px]",
                isActive ? "text-red" : "text-fg",
              )}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
