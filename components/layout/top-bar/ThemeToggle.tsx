"use client";

import { useState, useTransition } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import type { Theme } from "@/config/preferences";
import { setTheme } from "@/lib/actions";

type ThemeToggleProps = {
  initial: Theme;
  labels: { light: string; dark: string };
};

export function ThemeToggle({ initial, labels }: ThemeToggleProps) {
  const [theme, setLocalTheme] = useState(initial);
  const [, startTransition] = useTransition();
  const isDark = theme === "dark";
  const Icon = isDark ? SunIcon : MoonIcon;

  function toggle() {
    const next: Theme = isDark ? "light" : "dark";
    setLocalTheme(next);
    document.documentElement.dataset.theme = next; // instant, no server round-trip
    startTransition(() => setTheme(next));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? labels.light : labels.dark}
      className="grid size-9 place-items-center rounded-full rotate-0 text-red transition hover:rotate-45 hover:bg-red/10"
    >
      <Icon className="size-[18px]" strokeWidth={1.8} />
    </button>
  );
}
