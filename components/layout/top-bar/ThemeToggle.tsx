"use client";

import { useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
  }

  const Icon = isDark ? SunIcon : MoonIcon;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
      className="text-fg/90 transition-colors hover:text-fg"
    >
      <Icon className="size-[22px]" strokeWidth={1.8} />
    </button>
  );
}
