import { LogoMark } from "@/components/brand/LogoMark";
import { BellIcon, SearchIcon } from "@/components/icons";

export function AppHeader({ welcome }: { welcome: string }) {
  return (
    <div className="flex h-[44px] shrink-0 items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <LogoMark className="size-7 text-white" />
        <div className="leading-tight">
          <p className="text-[9px] text-white/50">{welcome}</p>
          <p className="font-display text-[13px] font-semibold">
            Radical <span className="text-red">dev</span>
          </p>
        </div>
      </div>
      <div className="flex gap-1.5">
        <span className="grid size-7 place-items-center rounded-full bg-white/[0.08]">
          <SearchIcon className="size-3.5" />
        </span>
        <span className="relative grid size-7 place-items-center rounded-full bg-white/[0.08]">
          <BellIcon className="size-3.5" />
          <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-red" />
        </span>
      </div>
    </div>
  );
}
