"use client";

import { Fragment, useState } from "react";
import { languages, type Language } from "@/config/navigation";
import { cn } from "@/lib/cn";

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>("PT");

  return (
    <div className="flex items-center gap-[14px] text-[15px] tracking-[0.06em] sm:text-[19px]">
      {languages.map((lang, index) => (
        <Fragment key={lang}>
          {index > 0 && <span aria-hidden="true" className="h-[18px] w-px bg-fg/35" />}
          <button
            type="button"
            aria-pressed={language === lang}
            onClick={() => setLanguage(lang)}
            className={cn(
              "transition-colors",
              language === lang
                ? "font-bold text-fg"
                : "font-medium text-fg/60 hover:text-fg",
            )}
          >
            {lang}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
