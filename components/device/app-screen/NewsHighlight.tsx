// [left, top] of each seated person in the placeholder photo.
const people = [
  [18, 98],
  [34, 108],
  [52, 120],
  [26, 132],
  [150, 98],
  [166, 108],
  [178, 122],
  [158, 134],
];

export function NewsHighlight() {
  return (
    <div className="relative h-[176px] overflow-hidden bg-gradient-to-b from-[#3a2a24] via-[#7b5d4b] to-[#b8a492]">
      <WelcomeScreen />
      <div className="absolute bottom-[16px] left-1/2 h-[64px] w-[150px] -translate-x-1/2 bg-[#4a3226] [clip-path:polygon(38%_0,62%_0,100%_100%,0_100%)]" />
      {people.map(([left, top]) => (
        <Person key={`${left}-${top}`} left={left} top={top} />
      ))}
      <p className="absolute inset-x-0 bottom-0 bg-black/60 px-[6px] py-[3px] text-[5px] font-bold text-white">
        Radical lança nova plataforma de serviços digitais em Angola
      </p>
    </div>
  );
}

function WelcomeScreen() {
  return (
    <div className="absolute left-1/2 top-[14px] h-[56px] w-[118px] -translate-x-1/2 rounded-[2px] bg-[#f5f1ea] p-[5px] text-center text-[4.5px] font-bold text-brand-red shadow">
      <p>BEM-VINDOS À</p>
      <p>RADICAL CODE &amp; CREATE</p>
      <div className="mt-[4px] space-y-[2px]">
        {[90, 70, 80, 55].map((width) => (
          <span key={width} className="mx-auto block h-[1.5px] bg-brand-red/40" style={{ width: `${width}%` }} />
        ))}
      </div>
    </div>
  );
}

function Person({ left, top }: { left: number; top: number }) {
  return (
    <span className="absolute" style={{ left, top }}>
      <span className="mx-auto block size-[9px] rounded-full bg-[#2b1a14]" />
      <span className="-mt-[1px] block h-[14px] w-[16px] -translate-x-[3px] rounded-t-[6px] bg-[#1b1b22]" />
    </span>
  );
}
