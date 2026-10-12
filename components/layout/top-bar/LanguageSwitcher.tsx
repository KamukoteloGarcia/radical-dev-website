"use client";

import { addTransitionType, Fragment, useOptimistic, useTransition } from "react";
import { languages, languageTransition, type Language } from "@/config/preferences";
import { setLanguage } from "@/lib/actions";
import { cn } from "@/lib/cn";

type LanguageSwitcherProps = { current: Language; label: string };

export function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  // Highlights the chosen language right away, before the server answers.
  const [active, setActive] = useOptimistic(current);

  function choose(language: Language) {
    if (language === active) return;
    startTransition(async () => {
      addTransitionType(languageTransition);
      setActive(language);
      await setLanguage(language);
    });
  }

  return (
    <div
      role="group"
      aria-label={label}
      aria-busy={isPending}
      className="flex items-center gap-2 text-[15px]"
    >
      {languages.map((language, i) => (
        <Fragment key={language}>
          {i > 0 && <span aria-hidden="true" className="h-4 w-px bg-subtle/60" />}
          <button
            type="button"
            lang={language}
            aria-pressed={language === active}
            onClick={() => choose(language)}
            className={cn(
              "uppercase transition-colors",
              language === active ? "text-red" : "text-muted hover:text-fg",
            )}
          >
            {language}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
