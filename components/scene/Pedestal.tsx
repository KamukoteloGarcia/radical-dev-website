import { UsersIcon } from "@/components/icons";
import { Box3d } from "@/components/ui/Box3d";

const size = 150;
const depth = 30;

const faces = {
  front:
    "rounded-[6px] bg-[linear-gradient(135deg,#25252b,#121216)] ring-1 ring-red/60 shadow-[inset_0_0_26px_rgba(227,52,63,0.5)]",
  side: "bg-[#0d0d10] border-t-2 border-red/70",
  top: "bg-[#18181d]",
};

// Dark pedestal with a red "team" hologram standing on it (bottom right).
export function Pedestal() {
  return (
    <div aria-hidden="true" className="absolute left-[486px] top-[404px] size-[150px] transform-3d">
      <div className="relative size-full transform-3d" style={{ transform: "rotateX(62deg) rotateZ(-38deg)" }}>
        <Box3d width={size} height={size} depth={depth} faces={faces} />

        {/* Hologram: plane standing up from the top face */}
        <div
          className="absolute left-1/2 top-1/2 h-[96px] w-[110px] origin-bottom"
          style={{ transform: `translate(-50%, -100%) translateZ(${depth / 2}px) rotateX(-90deg)` }}
        >
          <span className="absolute inset-x-3 bottom-0 h-full bg-[linear-gradient(to_top,var(--glow),transparent)] [clip-path:polygon(25%_100%,75%_100%,100%_0,0_0)]" />
          <UsersIcon className="relative size-full p-3 text-red-bright drop-shadow-[0_0_10px_var(--red)] motion-safe:animate-glow" />
        </div>
      </div>
    </div>
  );
}
