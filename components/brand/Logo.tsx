import { LogoMark } from "./LogoMark";

export function Logo({ label }: { label: string }) {
  return (
    <a href="#inicio" aria-label={label} className="flex items-center gap-2 text-fg">
      <LogoMark className="size-[38px]" />
      <span className="flex flex-col font-display leading-[0.95]">
        <span className="text-[21px] font-semibold tracking-[-0.01em]">Radical</span>
        <span className="text-[19px] font-medium text-red">dev</span>
      </span>
    </a>
  );
}
