import { Box3d } from "@/components/ui/Box3d";
import { redGlass } from "./glass";

const bars = [50, 82, 64, 110, 92];
const barSize = 24;
const gap = 12;

const plate = {
  front: "rounded-[10px] bg-[linear-gradient(135deg,#25252b,#121216)] ring-1 ring-red/50",
  side: "bg-[#0d0d10]",
  top: "bg-[#18181d]",
};

// Small 3D bar chart: glass bars growing out of a dark plate.
export function BarChart3d({ position }: { position: { left: number; top: number } }) {
  const width = bars.length * (barSize + gap) + gap;

  return (
    <div aria-hidden="true" className="absolute transform-3d motion-safe:animate-float [animation-delay:-3s]" style={position}>
      <div className="relative transform-3d" style={{ width, height: 70, transform: "rotateX(60deg) rotateZ(-35deg)" }}>
        <Box3d width={width} height={70} depth={10} faces={plate} />
        {bars.map((height, i) => (
          <Box3d
            key={i}
            width={barSize}
            height={barSize}
            depth={height}
            faces={redGlass}
            style={{ left: gap + i * (barSize + gap), top: 23, transform: `translateZ(${height / 2 + 5}px)` }}
          />
        ))}
      </div>
    </div>
  );
}
