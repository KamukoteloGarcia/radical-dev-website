import { cookies } from "next/headers";
import { content } from "@/config/content";
import { cookieNames, defaults, languages, themes, type Language, type Theme } from "@/config/preferences";

// Server-only readers (use in Server Components).
export async function getLanguage(): Promise<Language> {
  const value = (await cookies()).get(cookieNames.language)?.value;
  return languages.find((language) => language === value) ?? defaults.language;
}

export async function getTheme(): Promise<Theme> {
  const value = (await cookies()).get(cookieNames.theme)?.value;
  return themes.find((theme) => theme === value) ?? defaults.theme;
}

export async function getContent() {
  return content[await getLanguage()];
}
