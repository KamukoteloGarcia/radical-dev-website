import { AppScreen } from "@/components/device/app-screen/AppScreen";
import { PhoneFrame } from "@/components/device/PhoneFrame";
import { CodeIcon, TrendUpIcon, UsersIcon } from "@/components/icons";
import { IconTile } from "@/components/ui/IconTile";
import { OrbitRings } from "./OrbitRings";

// Positions are relative to the fixed 560×580 canvas.
const tiles = [
  { id: "code", Icon: CodeIcon, style: { left: 0, top: 85, animationDelay: "0s" } },
  { id: "trend", Icon: TrendUpIcon, style: { left: 498, top: 22, animationDelay: "-2s" } },
  { id: "users", Icon: UsersIcon, style: { left: 9, top: 401, animationDelay: "-4s" } },
];

export function HeroVisual() {
  return (
    // Wrapper reserves the scaled size; the canvas scales per breakpoint.
    <div className="relative h-[348px] w-full shrink-0 sm:h-[522px] lg:h-[406px] lg:w-[392px] xl:h-[493px] xl:w-[476px] 2xl:h-[580px] 2xl:w-[560px]">
      <div className="absolute left-1/2 top-0 h-[580px] w-[560px] origin-top -translate-x-1/2 scale-60 sm:scale-90 lg:scale-70 xl:scale-85 2xl:scale-100">
        <OrbitRings />
        <div className="absolute left-[167px] top-[40px]">
          <PhoneFrame>
            <AppScreen />
          </PhoneFrame>
        </div>
        {tiles.map(({ id, Icon, style }) => (
          <IconTile key={id} style={style}>
            <Icon className="size-[30px]" strokeWidth={2.6} />
          </IconTile>
        ))}
      </div>
    </div>
  );
}
