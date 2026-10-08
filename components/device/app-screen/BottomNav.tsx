import { cn } from "@/lib/cn";

const tabs = ["Início", "Notícias", "Alertas", "Perfil"];

export function BottomNav() {
  return (
    <div className="flex h-[26px] items-center justify-around border-t border-black/5 bg-white pb-[2px]">
      {tabs.map((label, index) => (
        <span key={label} className="flex flex-col items-center gap-[1px]">
          <span
            className={cn("size-[7px] rounded-[2px]", index === 0 ? "bg-brand-red" : "bg-brand-ink/70")}
          />
          <span className="text-[3.5px] text-brand-ink/70">{label}</span>
        </span>
      ))}
    </div>
  );
}
