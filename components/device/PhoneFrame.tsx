import type { ReactNode } from "react";

const sideButtons = [
  "-left-[3px] top-[82px] h-[22px] rounded-l-sm",
  "-left-[3px] top-[118px] h-[40px] rounded-l-sm",
  "-left-[3px] top-[166px] h-[40px] rounded-l-sm",
  "-right-[3px] top-[130px] h-[62px] rounded-r-sm",
];

// Reusable phone shell — pass any screen (component or <Image fill />) as children.
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-[470px] w-[226px]">
      {sideButtons.map((position) => (
        <span key={position} className={`absolute w-[3px] bg-[#d4d4d8] ${position}`} />
      ))}

      <div className="relative size-full rounded-[38px] bg-[#0d0d0d] p-[7px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] ring-[2.5px] ring-[#e4e4e7]">
        <div className="relative size-full overflow-hidden rounded-[31px] bg-white">
          <div className="absolute left-1/2 top-0 z-20 h-[20px] w-[100px] -translate-x-1/2 rounded-b-[14px] bg-[#0d0d0d]" />
          {children}
        </div>
      </div>
    </div>
  );
}
