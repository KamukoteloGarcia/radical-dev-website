const floorStyle = {
  backgroundColor: "var(--floor)",
  backgroundImage:
    "linear-gradient(var(--floor-line) 2px, transparent 2px), linear-gradient(90deg, var(--floor-line) 2px, transparent 2px)",
  backgroundSize: "88px 88px",
  transform: "translate(-50%, -50%) rotateX(62deg) rotateZ(38deg)",
};

// Tiled floor in perspective + red glow behind the scene.
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full perspective-[1400px] [mask-image:linear-gradient(to_right,transparent,#000_40%)] lg:w-[72%]">
        <div className="absolute left-1/2 top-[68%] size-[1400px]" style={floorStyle} />
      </div>
      <div className="absolute right-[12%] top-[38%] size-[560px] rounded-full bg-glow blur-[130px] motion-safe:animate-glow" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent" />
    </div>
  );
}
