import { cn } from "@/lib/cn";

type SliderDotsProps = {
  total: number;
  active: number;
  isPaused: boolean;
  label: string;
  onSelect: (index: number) => void;
};

// Dots; the active one fills up as a progress bar until the next banner.
export function SliderDots({ total, active, isPaused, label, onSelect }: SliderDotsProps) {
  return (
    <div className="mt-2 flex justify-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`${label} ${i + 1}`}
          aria-current={i === active}
          onClick={() => onSelect(i)}
          className={cn(
            "h-1.5 overflow-hidden rounded-full bg-white/25 transition-[width] duration-300",
            i === active ? "w-6" : "w-1.5 hover:bg-white/50",
          )}
        >
          {i === active && (
            <span
              key={active}
              className="block size-full origin-left bg-red motion-safe:animate-progress"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
