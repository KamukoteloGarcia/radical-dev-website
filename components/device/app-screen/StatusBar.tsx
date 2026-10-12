const bars = [4, 6, 8, 10];

export function StatusBar() {
  return (
    <div className="flex h-[38px] shrink-0 items-center justify-between px-6 pt-1 text-[11px] font-semibold">
      <span>9:41</span>
      <span className="flex items-center gap-1.5">
        <span className="flex items-end gap-[1.5px]">
          {bars.map((height) => (
            <span key={height} className="w-[2.5px] rounded-full bg-white" style={{ height }} />
          ))}
        </span>
        <span className="h-[10px] w-[20px] rounded-[3px] border border-white/60 p-[1.5px]">
          <span className="block h-full w-4/5 rounded-[1px] bg-white" />
        </span>
      </span>
    </div>
  );
}
