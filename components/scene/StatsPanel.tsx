import type { Content } from "@/config/content";

const bars = [38, 55, 46, 70, 62, 88, 76];

const donutStyle = {
  background: "conic-gradient(var(--red) 0 72%, rgba(255,255,255,0.1) 0)",
  mask: "radial-gradient(circle, transparent 52%, #000 54%)",
};

type StatsPanelProps = {
  labels: Content["stats"];
  position?: { left: number; top: number };
};

// Floating dashboard card (top right of the phone scene by default).
export function StatsPanel({ labels, position = { left: 500, top: 14 } }: StatsPanelProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute w-[172px] transform-3d motion-safe:animate-float [animation-delay:-1s]"
      style={position}
    >
      <div
        className="rounded-[14px] bg-[#16161b]/90 p-3 text-white ring-1 ring-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7),0_0_30px_-8px_var(--glow)]"
        style={{ transform: "rotateY(-28deg) rotateX(10deg) translateZ(-30px)" }}
      >
        <div className="flex items-center justify-between text-[10px] text-white/60">
          <span>{labels.title}</span>
          <span className="size-1.5 rounded-full bg-red motion-safe:animate-glow" />
        </div>

        <div className="mt-1 flex items-end gap-3">
          <div>
            <p className="font-display text-[22px] font-semibold leading-none">98%</p>
            <p className="mt-1 text-[9px] text-white/50">{labels.deliveries}</p>
          </div>
          <div className="ml-auto flex h-9 items-end gap-[3px]">
            {bars.map((height, i) => (
              <span key={i} className="w-[5px] rounded-sm bg-red/80" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>

        <div className="mt-2.5 flex items-center gap-2 border-t border-white/10 pt-2.5">
          <span className="size-7 rounded-full" style={donutStyle} />
          <div>
            <p className="text-[12px] font-semibold leading-none">8,4k</p>
            <p className="mt-0.5 text-[9px] text-white/50">{labels.clients}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
