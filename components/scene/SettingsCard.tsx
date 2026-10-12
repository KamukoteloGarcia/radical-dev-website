import { Box3d } from "@/components/ui/Box3d";
import { cn } from "@/lib/cn";
import { redGlass } from "./glass";

const slabs = [
  { on: true, z: 0, offset: 0 },
  { on: false, z: 26, offset: -14 },
];

// Two stacked glass slabs with toggle switches (top left of the scene).
export function SettingsCard() {
  return (
    <div aria-hidden="true" className="absolute left-[60px] top-[60px] h-[70px] w-[150px] transform-3d motion-safe:animate-float [animation-delay:-2s]">
      <div className="size-full transform-3d" style={{ transform: "rotateX(52deg) rotateZ(-36deg)" }}>
        {slabs.map(({ on, z, offset }) => (
          <Box3d
            key={z}
            width={150}
            height={62}
            depth={12}
            faces={{ ...redGlass, front: cn(redGlass.front, "flex items-center gap-3 rounded-[10px] px-4") }}
            style={{ left: offset, top: offset, transform: `translateZ(${z}px)` }}
          >
            <span className={cn("flex h-5 w-9 rounded-full p-0.5", on ? "justify-end bg-white" : "bg-white/35")}>
              <span className={cn("size-4 rounded-full", on ? "bg-red" : "bg-white")} />
            </span>
            <span className="flex flex-1 flex-col gap-1.5">
              <span className="h-1.5 w-full rounded-full bg-white/80" />
              <span className="h-1.5 w-2/3 rounded-full bg-white/45" />
            </span>
          </Box3d>
        ))}
      </div>
    </div>
  );
}
