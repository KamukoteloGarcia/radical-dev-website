import { CodeIcon } from "@/components/icons";
import { Box3d } from "@/components/ui/Box3d";
import { cn } from "@/lib/cn";
import { redGlass } from "./glass";

const size = 84;

// Glass cube with the </> symbol, gently swaying (left of the scene).
export function CodeCube() {
  return (
    <div aria-hidden="true" className="absolute left-[34px] top-[300px] size-[84px] transform-3d motion-safe:animate-float [animation-delay:-4s]">
      <div className="size-full transform-3d [transform:rotateX(-18deg)_rotateY(34deg)] motion-safe:animate-sway">
        <Box3d
          width={size}
          height={size}
          depth={size}
          faces={{ ...redGlass, front: cn(redGlass.front, "grid place-items-center rounded-[12px]") }}
        >
          <CodeIcon className="size-10 text-white" strokeWidth={2.6} />
        </Box3d>
      </div>
    </div>
  );
}
