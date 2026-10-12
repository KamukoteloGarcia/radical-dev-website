import type { CSSProperties, ReactNode } from "react";
import { Box3d } from "@/components/ui/Box3d";

export const tablet = { width: 460, height: 330, bezel: 16 };
export const tabletScreen = {
  width: tablet.width - tablet.bezel * 2,
  height: tablet.height - tablet.bezel * 2,
};

const faces = {
  front: "rounded-[26px] bg-[#0b0b0d] ring-1 ring-white/15",
  side: "bg-[linear-gradient(90deg,#3a3a42,#5a5a63,#3a3a42)]",
  top: "bg-[#4a4a52]",
};

// 3D tablet (landscape); `children` fills the screen.
export function Tablet({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  const { width, height, bezel } = tablet;

  return (
    <Box3d width={width} height={height} depth={12} faces={faces} style={style}>
      <span className="absolute left-[7px] top-1/2 size-[5px] -translate-y-1/2 rounded-full bg-[#1f1f25]" />
      <div className="absolute overflow-hidden rounded-[12px]" style={{ inset: bezel }}>
        {children}
      </div>
    </Box3d>
  );
}
