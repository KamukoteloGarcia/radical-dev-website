export function AppHeader() {
  return (
    <div className="bg-brand-red px-[8px] pb-[6px] text-white">
      <div className="flex h-[12px] flex-col justify-center gap-[1.5px]">
        {[0, 1, 2].map((line) => (
          <span key={line} className="h-[1px] w-[7px] bg-white" />
        ))}
      </div>
      <div className="mt-[2px] flex items-center justify-center gap-[5px] leading-none">
        <span className="font-display text-[11px] font-extrabold">R</span>
        <span className="text-[4.5px] font-bold leading-[1.1] tracking-wide">
          RADICAL
          <br />
          DIGITAL
        </span>
        <span className="h-[14px] w-px bg-white/70" />
        <span>
          <span className="block text-[8px] font-bold">
            app<span className="font-normal">.radical.dev</span>
          </span>
          <span className="block text-[4.5px]">Plataforma de Serviços</span>
        </span>
      </div>
    </div>
  );
}
