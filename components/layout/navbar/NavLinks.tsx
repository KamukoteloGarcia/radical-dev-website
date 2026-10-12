"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Content } from "@/config/content";
import { cn } from "@/lib/cn";

type NavLinksProps = {
  links: Content["links"];
  vertical?: boolean;
  onNavigate?: () => void;
};

// Page links ("/inovacao") are active on their route; section links ("/#solucoes") never are.
function isActiveLink(href: string, pathname: string) {
  if (href.includes("#")) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function NavLinks({ links, vertical = false, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex", vertical ? "flex-col" : "items-center gap-8 xl:gap-10")}>
      {links.map(({ label, href }) => {
        const isActive = isActiveLink(href, pathname);
        return (
          <li key={href}>
            <Link
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
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
