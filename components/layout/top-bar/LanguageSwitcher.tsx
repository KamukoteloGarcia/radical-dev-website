"use client";

import { Fragment, useTransition } from "react";
import { languages, type Language } from "@/config/preferences";
import { setLanguage } from "@/lib/actions";
import { cn } from "@/lib/cn";

type LanguageSwitcherProps = { current: Language; label: string };

export function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      role="group"
      aria-label={label}
      aria-busy={isPending}
      className={cn("flex items-center gap-2 text-[15px] transition-opacity", isPending && "opacity-60")}
    >
      {languages.map((language, i) => (
        <Fragment key={language}>
          {i > 0 && <span aria-hidden="true" className="h-4 w-px bg-subtle/60" />}
          <button
            type="button"
            lang={language}
            aria-pressed={language === current}
            onClick={() => startTransition(() => setLanguage(language))}
            className={cn(
              "uppercase transition-colors",
              language === current ? "text-red" : "text-muted hover:text-fg",
            )}
          >
            {language}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
