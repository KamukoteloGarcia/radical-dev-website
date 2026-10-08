import { cn } from "@/lib/cn";

const items = ["Serviços", "Eventos", "Projectos", "Contactos"];

export function QuickAccessGrid() {
  return (
    <div className="grid flex-1 grid-cols-2 gap-[6px] bg-[#f4f4f5] p-[6px]">
      {items.map((label, index) => (
        <div key={label} className="flex h-[30px] items-center gap-[4px] rounded-[4px] bg-[#fde8ea] px-[6px]">
          <span
            className={cn(
              "size-[7px] rounded-[2px]",
              index % 2 ? "bg-brand-red" : "border-[1.5px] border-brand-red",
            )}
          />
          <span className="text-[5.5px] font-bold">{label}</span>
        </div>
      ))}
    </div>
  );
}
