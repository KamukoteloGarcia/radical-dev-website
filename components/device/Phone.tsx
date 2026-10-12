import type { ReactNode } from "react";
import { phone } from "./dimensions";
import { PhoneBack } from "./PhoneBack";
import { PhoneBody } from "./PhoneBody";
import { PhoneFront } from "./PhoneFront";

// 3D phone: tilted in the scene, floating and turning (pauses on hover).
export function Phone({ children }: { children: ReactNode }) {
  return (
    <div
      className="absolute left-[215px] top-[60px] transform-3d"
      style={{ width: phone.width, height: phone.height, transform: "rotateX(20deg) rotateZ(18deg)" }}
    >
      <div className="size-full transform-3d motion-safe:animate-float">
        <div className="relative size-full transform-3d [transform:rotateY(-24deg)] hover:[animation-play-state:paused] motion-safe:animate-showcase">
          <PhoneBody />
          <PhoneBack />
          <PhoneFront>{children}</PhoneFront>
        </div>
      </div>
    </div>
  );
}
