import { mainLinks } from "@/config/navigation";
import { cn } from "@/lib/cn";

type NavLinksProps = {
  activeHref?: string;
  vertical?: boolean;
  onNavigate?: () => void;
};

export function NavLinks({ activeHref = "/", vertical = false, onNavigate }: NavLinksProps) {
  return (
    <ul className={cn("flex", vertical ? "flex-col" : "items-center gap-[44px]")}>
      {mainLinks.map(({ label, href }) => {
        const isActive = href === activeHref;
        return (
          <li key={href}>
            <a
              href={href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "transition-colors",
                vertical ? "block py-3 text-[18px]" : "text-[19px]",
                isActive ? "font-semibold text-fg" : "font-medium text-fg/70 hover:text-fg",
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
