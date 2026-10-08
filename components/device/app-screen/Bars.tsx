// Tiny bar graphic reused for the signal indicator and the chart icon.
export function Bars({ heights }: { heights: number[] }) {
  return (
    <span className="flex items-end gap-[1px]">
      {heights.map((height, index) => (
        <span key={index} className="w-[1.5px] bg-white" style={{ height }} />
      ))}
    </span>
  );
}
