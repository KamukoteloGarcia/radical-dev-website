"use client";

import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import type { Content } from "@/config/content";
import { NavLinks } from "./NavLinks";

type MobileNavProps = {
  links: Content["links"];
  labels: { open: string; close: string; menu: string };
};

export function MobileNav({ links, labels }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = isOpen ? CloseIcon : MenuIcon;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? labels.close : labels.open}
        className="grid size-11 place-items-center rounded-lg text-fg hover:bg-fg/10"
      >
        <Icon className="size-6" />
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label={labels.menu}
          className="absolute inset-x-0 top-full z-40 border-b border-line bg-nav px-5 py-2 shadow-2xl sm:px-8"
        >
          <NavLinks links={links} vertical onNavigate={() => setIsOpen(false)} />
        </nav>
      )}
    </div>
  );
}
