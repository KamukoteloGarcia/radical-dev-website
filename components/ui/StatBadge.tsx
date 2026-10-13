import type { CSSProperties } from "react";
import { UsersOutlineIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

const sizes = {
  md: { box: "w-[160px] px-4 pb-3.5 pt-4 sm:w-[176px]", stat: "text-[28px]", label: "text-[12px]", icon: "size-10", glyph: "size-5" },
  lg: { box: "w-[180px] px-5 pb-5 pt-6 sm:w-[200px]", stat: "text-[36px]", label: "text-[15px]", icon: "size-12 sm:size-14", glyph: "size-6" },
};

type StatBadgeProps = {
  stat: string;
  label: string;
  size?: keyof typeof sizes;
  className?: string;
  style?: CSSProperties;
};

// Red stats badge with a dark people icon on its corner. Overlaps a photo's bottom-right corner
// (the parent must be `relative`).
export function StatBadge({ stat, label, size = "md", className, style }: StatBadgeProps) {
  const s = sizes[size];

  return (
    <div
      style={style}
      className={cn(
        "absolute bottom-0 right-0 rounded-[14px] bg-red text-white shadow-[0_18px_36px_-14px_var(--glow)]",
        s.box,
        className,
      )}
    >
      <span className={cn("absolute -right-2 -top-4 grid place-items-center rounded-xl bg-[#141416] text-white shadow-lg", s.icon)}>
        <UsersOutlineIcon className={s.glyph} />
      </span>
      <p className={cn("font-display font-semibold leading-none", s.stat)}>{stat}</p>
      <p className={cn("mt-1.5 font-medium leading-snug", s.label)}>{label}</p>
    </div>
  );
}
