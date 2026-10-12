import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-[linear-gradient(135deg,var(--red),var(--red-deep))] text-white ring-1 ring-red-bright/40 shadow-[0_10px_34px_-8px_var(--glow)] hover:brightness-110",
  outline: "border border-fg/70 text-fg hover:border-fg hover:bg-fg/5",
};

type ButtonLinkProps = ComponentProps<"a"> & { variant?: Variant };

// Pill-shaped link styled as a button.
export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex h-[54px] items-center justify-center gap-3 rounded-full px-8 text-[16px] font-medium transition",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
