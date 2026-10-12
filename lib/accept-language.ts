import { languages, type Language } from "@/config/preferences";

// Picks the best supported language from an Accept-Language header,
// e.g. "en-GB,en;q=0.9,pt;q=0.8" -> "en". No external library needed.
export function matchLanguage(header: string | null): Language | undefined {
  if (!header) return undefined;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((param) => param.trim().startsWith("q="));
      return { base: tag.split("-")[0], weight: q ? Number(q.split("=")[1]) : 1 };
    })
    .filter(({ weight }) => weight > 0)
    .sort((a, b) => b.weight - a.weight);

  for (const { base } of ranked) {
    const match = languages.find((language) => language === base);
    if (match) return match;
  }
}
