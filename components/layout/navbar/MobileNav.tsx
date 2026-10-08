"use client";

import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { NavLinks } from "./NavLinks";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = isOpen ? CloseIcon : MenuIcon;

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="grid size-11 place-items-center rounded-lg text-fg hover:bg-fg/10"
      >
        <Icon className="size-7" />
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Principal"
          className="absolute inset-x-0 top-full border-t border-line/10 bg-nav px-4 py-3 shadow-2xl sm:px-[56px]"
        >
          <NavLinks vertical onNavigate={() => setIsOpen(false)} />
        </nav>
      )}
    </div>
  );
}
