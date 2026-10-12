import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Box3d } from "@/components/ui/Box3d";

const faces = {
  front: "overflow-hidden rounded-[18px] bg-white ring-4 ring-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]",
  side: "bg-[#e4e4e7]",
  top: "bg-[#f4f4f5]",
};

type PhotoCardProps = {
  src: string;
  width: number;
  height: number;
  style?: CSSProperties;
  /** Optional overlay (e.g. a name tag). */
  children?: ReactNode;
};

// Real photo printed on a thick 3D card.
export function PhotoCard({ src, width, height, style, children }: PhotoCardProps) {
  return (
    <Box3d width={width} height={height} depth={10} faces={faces} style={style}>
      <Image src={src} alt="" fill unoptimized className="object-cover" />
      {children}
    </Box3d>
  );
}
