import Link from "next/link";

// Placeholder logo — swap for the real brand asset when available.
export function Logo() {
  return (
    <Link href="/" aria-label="Radical — página inicial" className="flex items-center gap-[6px]">
      <span className="grid size-[37px] shrink-0 place-items-center rounded-[4px] bg-logo-mark">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-[24px] text-logo-mark-fg"
          aria-hidden="true"
        >
          <path d="M7 20V4h6a4 4 0 0 1 0 8H7M12.5 12l5 8" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-logo text-[31px] font-extrabold tracking-[-0.03em] text-fg">
          radical
        </span>
        <span className="-mt-[2px] font-logo text-[12.5px] font-semibold text-fg/95">
          code &amp; create
        </span>
      </span>
    </Link>
  );
}
