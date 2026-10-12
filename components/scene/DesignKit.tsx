import { Box3d } from "@/components/ui/Box3d";

const swatches = [
  { front: "rounded-[10px] bg-[#e3343f]", side: "bg-[#a3111c]", top: "bg-[#c21c28]" },
  { front: "rounded-[10px] bg-[#f4f4f5]", side: "bg-[#d4d4d8]", top: "bg-[#e4e4e7]" },
  { front: "rounded-[10px] bg-[#18181b]", side: "bg-[#09090b]", top: "bg-[#27272a]" },
];

const pen = {
  front: "rounded-full bg-[linear-gradient(90deg,#e3343f_0_12%,#f4f4f5_12%_86%,#27272a_86%)]",
  side: "bg-[#d4d4d8]",
  top: "bg-[#e4e4e7]",
};

// Floating colour swatches fanned out + a stylus (design scene).
export function DesignKit() {
  return (
    <div aria-hidden="true">
      <div className="absolute left-[520px] top-[40px] size-[90px] transform-3d motion-safe:animate-float [animation-delay:-2s]">
        <div className="size-full transform-3d" style={{ transform: "rotateX(50deg) rotateZ(-30deg)" }}>
          {swatches.map((faces, i) => (
            <Box3d
              key={i}
              width={90}
              height={90}
              depth={8}
              faces={faces}
              style={{ transform: `translateZ(${i * 18}px) rotateZ(${i * 14}deg)` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute left-[60px] top-[470px] transform-3d motion-safe:animate-float [animation-delay:-4s]">
        <Box3d width={240} height={12} depth={12} faces={pen} style={{ transform: "rotateX(40deg) rotateZ(-18deg)" }} />
      </div>
    </div>
  );
}
