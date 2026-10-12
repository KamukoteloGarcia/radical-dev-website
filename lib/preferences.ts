import { cookies, headers } from "next/headers";
import { content } from "@/config/content";
import { cookieNames, defaults, languages, themes, type Language, type Theme } from "@/config/preferences";
import { matchLanguage } from "./accept-language";

// Server-only readers (use in Server Components).
// Language: the visitor's choice (cookie) wins, then the browser language, then PT.
export async function getLanguage(): Promise<Language> {
  const value = (await cookies()).get(cookieNames.language)?.value;
  const chosen = languages.find((language) => language === value);
  if (chosen) return chosen;

  return matchLanguage((await headers()).get("accept-language")) ?? defaults.language;
}

export async function getTheme(): Promise<Theme> {
  const value = (await cookies()).get(cookieNames.theme)?.value;
  return themes.find((theme) => theme === value) ?? defaults.theme;
}

export async function getContent() {
  return content[await getLanguage()];
}
