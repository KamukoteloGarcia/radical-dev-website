import { getContent, getLanguage, getTheme } from "@/lib/preferences";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SegmentTabs } from "./SegmentTabs";
import { ThemeToggle } from "./ThemeToggle";

export async function TopBar() {
  const [t, language, theme] = await Promise.all([getContent(), getLanguage(), getTheme()]);

  return (
    <div className="border-b border-line bg-topbar">
      <div className="mx-auto flex h-[50px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <SegmentTabs items={t.segments} label={t.a11y.segments} />
        <div className="flex shrink-0 items-center gap-4">
          <LanguageSwitcher current={language} label={t.a11y.language} />
          <ThemeToggle initial={theme} labels={{ light: t.a11y.lightTheme, dark: t.a11y.darkTheme }} />
        </div>
      </div>
    </div>
  );
}
