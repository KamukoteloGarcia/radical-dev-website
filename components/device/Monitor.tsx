import type { CSSProperties, ReactNode } from "react";
import { Box3d } from "@/components/ui/Box3d";

export const monitor = { width: 440, height: 270, bezel: 10 };
export const monitorScreen = {
  width: monitor.width - monitor.bezel * 2,
  height: monitor.height - monitor.bezel * 2,
};

const metal = { side: "bg-[#2a2a30]", top: "bg-[#3a3a42]" };

// 3D desktop monitor on a stand; `children` fills the screen.
export function Monitor({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  const { width, height, bezel } = monitor;

  return (
    <div className="absolute transform-3d" style={{ width, height, ...style }}>
      {/* Stand: neck behind the screen and a flat foot */}
      <Box3d
        width={46}
        height={130}
        depth={14}
        faces={{ front: "bg-[linear-gradient(90deg,#3a3a42,#55555e,#3a3a42)]", ...metal }}
        style={{ left: width / 2 - 23, top: height - 40, transform: "translateZ(-30px)" }}
      />
      <Box3d
        width={180}
        height={110}
        depth={10}
        faces={{ front: "rounded-[14px] bg-[linear-gradient(160deg,#4a4a52,#26262c)]", ...metal }}
        style={{ left: width / 2 - 90, top: height + 35, transform: "translateZ(-30px) rotateX(90deg)" }}
      />

      <Box3d
        width={width}
        height={height}
        depth={16}
        faces={{ front: "rounded-[12px] bg-[#050506] ring-1 ring-white/10", ...metal }}
      >
        <div className="absolute overflow-hidden rounded-[4px]" style={{ inset: bezel }}>
          {children}
        </div>
      </Box3d>
    </div>
  );
}
