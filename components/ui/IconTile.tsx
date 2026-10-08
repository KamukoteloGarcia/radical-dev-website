import type { CSSProperties, ReactNode } from "react";

type IconTileProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export function IconTile({ children, style }: IconTileProps) {
  return (
    <div
      aria-hidden="true"
      style={style}
      className="absolute grid size-[64px] place-items-center rounded-[14px] bg-tile text-tile-fg shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] backdrop-blur-sm motion-safe:animate-float"
    >
      {children}
    </div>
  );
}
