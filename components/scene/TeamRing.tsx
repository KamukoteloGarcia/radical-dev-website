import Image from "next/image";

const cardWidth = 200;
const cardHeight = 260;
const radius = 210;

type TeamRingProps = { photos: string[]; roles: string[] };

// Five portrait cards on a 3D ring that stops on each person, then turns to the next.
export function TeamRing({ photos, roles }: TeamRingProps) {
  const step = 360 / photos.length;

  return (
    <div
      className="absolute left-[240px] top-[120px] transform-3d"
      style={{ width: cardWidth, height: cardHeight, transform: "rotateX(-6deg)" }}
    >
      <div className="relative size-full transform-3d motion-safe:animate-carousel">
        {photos.map((src, i) => (
          <figure
            key={src}
            className="absolute inset-0 overflow-hidden rounded-[18px] bg-black ring-2 ring-white/20 backface-hidden"
            style={{ transform: `rotateY(${i * step}deg) translateZ(${radius}px)` }}
          >
            <Image src={src} alt="" fill unoptimized className="object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pb-3 pt-10">
              <span className="block h-0.5 w-6 rounded-full bg-red" />
              <span className="mt-1.5 block font-display text-[15px] font-semibold text-white">{roles[i]}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Glowing disc under the ring */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-full size-[520px] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)]"
        style={{ transform: "translate(-50%, -50%) translateY(40px) rotateX(90deg)" }}
      />
    </div>
  );
}
