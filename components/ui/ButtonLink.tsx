import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-btn font-medium text-btn-fg shadow-[0_12px_30px_-12px_rgba(0,0,0,0.45)] hover:bg-btn/90",
  outline:
    "border-2 border-line/25 font-semibold text-fg hover:border-line/50 hover:bg-line/5",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
  icon?: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  icon,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group flex h-[64px] items-center justify-center gap-[22px] rounded-full font-display text-[19px] transition-colors sm:h-[71px] sm:text-[20px]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {icon}
    </a>
  );
}
