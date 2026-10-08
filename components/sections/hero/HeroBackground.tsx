export function HeroBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_85%_at_12%_40%,var(--hero-glow-1)_0%,transparent_72%),radial-gradient(ellipse_45%_55%_at_100%_0%,var(--hero-glow-2)_0%,transparent_70%)]"
      />
      <Waves />
    </>
  );
}

function Waves() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      className="pointer-events-none absolute -bottom-24 -left-24 -z-10 w-[420px] text-line opacity-[0.12]"
      fill="none"
      stroke="currentColor"
    >
      {Array.from({ length: 9 }, (_, i) => (
        <path
          key={i}
          d={`M0 ${120 + i * 22} C ${90 + i * 8} ${80 + i * 22}, ${170 + i * 10} ${200 + i * 20}, ${260 + i * 14} 400`}
        />
      ))}
    </svg>
  );
}
