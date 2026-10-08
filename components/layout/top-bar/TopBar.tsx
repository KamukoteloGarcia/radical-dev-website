import { LanguageSwitcher } from "./LanguageSwitcher";
import { SegmentTabs } from "./SegmentTabs";
import { ThemeToggle } from "./ThemeToggle";

export function TopBar() {
  return (
    <div className="bg-topbar">
      <div className="flex h-[74px] items-center justify-between gap-4 px-4 sm:px-[38px] lg:pr-[48px]">
        <SegmentTabs />
        <div className="flex shrink-0 items-center gap-5 lg:gap-[30px]">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
