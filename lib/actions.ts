"use server";

import { cookies } from "next/headers";
import { cookieNames, languages, themes, type Language, type Theme } from "@/config/preferences";

const oneYear = 60 * 60 * 24 * 365;

// Setting a cookie in a Server Action makes Next re-render the page with the new value.
export async function setLanguage(language: Language) {
  if (!languages.includes(language)) return;
  (await cookies()).set(cookieNames.language, language, { maxAge: oneYear, sameSite: "lax" });
}

export async function setTheme(theme: Theme) {
  if (!themes.includes(theme)) return;
  (await cookies()).set(cookieNames.theme, theme, { maxAge: oneYear, sameSite: "lax" });
}
