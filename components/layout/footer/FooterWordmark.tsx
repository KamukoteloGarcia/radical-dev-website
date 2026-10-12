// Giant outlined "RADICAL DEV" leaning back in perspective at the very bottom (decorative, static).
export function FooterWordmark() {
  return (
    <div aria-hidden="true" className="pointer-events-none -mb-[4vw] select-none overflow-hidden perspective-[900px]">
      <p className="origin-bottom text-center font-display text-[15vw] font-semibold leading-[0.85] tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_var(--line)] [background:linear-gradient(to_bottom,var(--glow),transparent_70%)] [background-clip:text] [transform:rotateX(38deg)] 2xl:text-[13rem]">
        RADICAL DEV
      </p>
    </div>
  );
}
