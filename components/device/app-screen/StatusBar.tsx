import { Bars } from "./Bars";

export function StatusBar() {
  return (
    <div className="flex h-[22px] items-center justify-between bg-brand-red px-[14px] pt-[2px] text-[7px] font-semibold text-white">
      <span>09:35</span>
      <span className="flex items-center gap-[3px]">
        <Bars heights={[3, 4, 5, 6]} />
        <span className="h-[5px] w-[10px] rounded-[1.5px] border border-white p-[0.5px]">
          <span className="block h-full w-3/4 bg-white" />
        </span>
      </span>
    </div>
  );
}
