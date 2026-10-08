import { Bars } from "./Bars";

export function PromoBanner() {
  return (
    <div className="relative flex h-[42px] items-center justify-between overflow-hidden bg-gradient-to-r from-[#a80d22] to-brand-red-bright px-[10px] text-white">
      <div className="leading-none">
        <p className="font-display text-[9px] font-extrabold tracking-wide">RADICAL</p>
        <p className="mt-[2px] text-[5px]">Soluções Digitais</p>
      </div>
      <span className="mr-[10px] grid size-[18px] place-items-center rounded-full border border-white">
        <Bars heights={[3, 5, 7]} />
      </span>
      <span className="absolute -right-[6px] top-0 h-full w-[18px] skew-x-[-18deg] bg-black/80" />
    </div>
  );
}
