// [left %, size px, delay s, drift px] of each spark.
const sparks = [
  [12, 5, 0, -8],
  [26, 3, 0.5, 6],
  [41, 6, 0.9, -4],
  [55, 4, 0.2, 10],
  [68, 5, 1.2, -10],
  [82, 3, 0.7, 4],
  [91, 4, 1.5, -6],
];

// Glowing sparks that rise from the bottom of a project photo while its card is hovered or focused.
export function ProjectSparks() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map(([left, size, delay, drift]) => (
        <span key={left} className="absolute bottom-2" style={{ left: `${left}%`, translate: `${drift}px 0` }}>
          <span
            className="block rounded-full bg-[#ffd1d4] opacity-0 shadow-[0_0_10px_2px_var(--red-bright)] motion-safe:group-hover:animate-spark motion-safe:group-focus-within:animate-spark"
            style={{ width: size, height: size, animationDelay: `${delay}s` }}
          />
        </span>
      ))}
    </div>
  );
}
