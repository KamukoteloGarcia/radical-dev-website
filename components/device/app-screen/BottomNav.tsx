import { ChatIcon, GridIcon, HomeIcon, UserIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

const tabs = [HomeIcon, GridIcon, ChatIcon, UserIcon];

export function BottomNav() {
  return (
    <div aria-hidden="true" className="mt-3 flex h-[52px] shrink-0 items-center justify-around border-t border-white/5 bg-black/40 pb-1">
      {tabs.map((Icon, i) => (
        <Icon key={i} className={cn("size-[18px]", i === 0 ? "text-red" : "text-white/45")} />
      ))}
    </div>
  );
}
