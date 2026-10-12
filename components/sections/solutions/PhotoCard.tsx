import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PhotoCardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  className?: string;
  /** Text, lists and buttons under the title. */
  children: ReactNode;
};

// Card with a real photo, a dark overlay from the bottom and content anchored at the bottom.
// Tilts back slightly in 3D and zooms the photo on hover.
export function PhotoCard({ image, icon, title, className, children }: PhotoCardProps) {
  return (
    <article className={cn("group perspective-[1200px]", className)}>
      <div className="relative isolate flex h-full flex-col justify-end overflow-hidden rounded-[18px] p-6 text-white shadow-[0_24px_50px_-28px_rgba(0,0,0,0.55)] transition duration-500 ease-out sm:p-7 motion-safe:group-hover:[transform:rotateX(3deg)_translateY(-4px)]">
        <Image
          src={image}
          alt=""
          fill
          unoptimized
          className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(10,10,12,0.96)_0%,rgba(18,8,10,0.8)_45%,rgba(10,10,12,0.2)_100%)]"
        />

        <span className="grid size-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/35">{icon}</span>
        <h3 className="mt-4 font-display text-[20px] font-semibold sm:text-[22px]">{title}</h3>
        {children}
      </div>
    </article>
  );
}
