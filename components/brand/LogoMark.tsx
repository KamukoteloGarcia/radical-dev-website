import { cn } from "@/lib/cn";

// Radical dev "R" mark: red bowl and stem, leg in the current text color.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={cn("shrink-0", className)}>
      <path
        fill="var(--red)"
        fillRule="evenodd"
        d="M5 4h16.5a11 11 0 0 1 0 22H14v10H5Zm9 8v6h7.2a3 3 0 0 0 0-6Z"
      />
      <path fill="currentColor" d="M20 24.5h10L37 36H27Z" />
    </svg>
  );
}
