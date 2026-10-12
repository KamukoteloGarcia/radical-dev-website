const floorStyle = {
  backgroundColor: "var(--floor)",
  backgroundImage:
    "linear-gradient(var(--floor-line) 2px, transparent 2px), linear-gradient(90deg, var(--floor-line) 2px, transparent 2px)",
  backgroundSize: "88px 88px",
  transform: "translate(-50%, -50%) rotateX(62deg) rotateZ(38deg)",
};

// Tiled floor in perspective + red glow. Fully static: painted once, no filters.
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full perspective-[1400px] [mask-image:linear-gradient(to_right,transparent,#000_40%)] lg:w-[72%]">
        <div className="absolute left-1/2 top-[68%] size-[1200px]" style={floorStyle} />
      </div>
      <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(40%_45%_at_72%_52%,var(--glow),transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent" />
    </div>
  );
}
