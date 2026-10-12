import type { CSSProperties, ReactNode } from "react";
import { Box3d } from "@/components/ui/Box3d";

export const laptop = { width: 400, depth: 260, lidHeight: 250, bezel: 12 };
export const laptopScreen = {
  width: laptop.width - laptop.bezel * 2,
  height: laptop.lidHeight - laptop.bezel * 2,
};

const baseFaces = {
  front: "rounded-[14px] bg-[linear-gradient(160deg,#e7e7ec,#c4c4cc)] p-5",
  side: "bg-[#a1a1aa]",
  top: "bg-[#b4b4bc]",
};

const lidFaces = {
  front: "rounded-[14px] bg-[#0b0b0d] ring-1 ring-black/40",
  side: "bg-[linear-gradient(160deg,#d4d4d8,#a1a1aa)]",
  top: "bg-[#a1a1aa]",
};

const keysStyle = {
  backgroundImage:
    "linear-gradient(90deg, transparent 3px, #3f3f46 3px), linear-gradient(transparent 3px, #3f3f46 3px)",
  backgroundSize: "26px 22px",
};

// 3D laptop: silver base with keyboard and an open lid that shows `children` on the screen.
export function Laptop({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  const { width, depth, lidHeight, bezel } = laptop;

  return (
    <div className="absolute transform-3d" style={{ width, height: depth, ...style }}>
      <Box3d width={width} height={depth} depth={12} faces={baseFaces}>
        <div className="h-[58%] rounded-[6px] bg-[#27272a] p-1" style={keysStyle} />
        <div className="mx-auto mt-4 h-[26%] w-[38%] rounded-[8px] bg-[#d4d4d8] ring-1 ring-black/10" />
      </Box3d>

      {/* Lid hinged on the far edge, opened a little past 90° */}
      <Box3d
        width={width}
        height={lidHeight}
        depth={8}
        faces={lidFaces}
        style={{ left: 0, top: -lidHeight, transformOrigin: "50% 100%", transform: "translateZ(6px) rotateX(-78deg)" }}
      >
        <div className="absolute overflow-hidden rounded-[6px]" style={{ inset: bezel }}>
          {children}
        </div>
      </Box3d>
    </div>
  );
}
