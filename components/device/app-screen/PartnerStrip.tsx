export function PartnerStrip() {
  return (
    <div className="flex h-[26px] items-center justify-between bg-white px-[8px] text-[8px] font-extrabold">
      <span className="font-display text-[10px]">R</span>
      <span className="size-[9px] rounded-[2px] bg-brand-red" />
      <span className="flex items-center gap-[2px] text-brand-red">
        <span className="size-[7px] rounded-full bg-brand-red" />
        RDX
      </span>
      <span className="tracking-tight">NEXA</span>
      <span className="text-[9px] text-brand-red">⟩⟩</span>
    </div>
  );
}
