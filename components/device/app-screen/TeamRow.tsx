import { team } from "@/config/team";
import { cn } from "@/lib/cn";

export function TeamRow({ title, seeAll }: { title: string; seeAll: string }) {
  return (
    <div className="mt-2.5 shrink-0 px-4">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold">{title}</span>
        <span className="text-[9.5px] text-red">{seeAll}</span>
      </div>
      <ul className="mt-2 flex justify-between">
        {team.map((member) => (
          <li key={member.name} className="flex flex-col items-center gap-1">
            <span
              className={cn(
                "grid size-[34px] place-items-center rounded-full bg-gradient-to-br text-[11px] font-semibold ring-2 ring-red/60 ring-offset-2 ring-offset-[#0c0c0f]",
                member.gradient,
              )}
            >
              {member.initials}
            </span>
            <span className="text-[9px] text-white/70">{member.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
