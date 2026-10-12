import { phone } from "./dimensions";

const layers = 16;

// Phone thickness: stacked rounded layers plus 4 flat side faces.
export function PhoneBody() {
  const { width: w, height: h, depth: d, radius: r } = phone;

  const sides = [
    { width: d, height: h - 2 * r, left: w - d / 2, top: r, transform: "rotateY(90deg)" },
    { width: d, height: h - 2 * r, left: -d / 2, top: r, transform: "rotateY(-90deg)" },
    { width: w - 2 * r, height: d, left: r, top: -d / 2, transform: "rotateX(90deg)" },
    { width: w - 2 * r, height: d, left: r, top: h - d / 2, transform: "rotateX(-90deg)" },
  ];

  return (
    <>
      {Array.from({ length: layers }, (_, i) => {
        const z = -d / 2 + 1 + (i * (d - 2)) / (layers - 1);
        // Brighter middle band, like a metal frame.
        const lightness = 16 + Math.sin((i / (layers - 1)) * Math.PI) * 16;
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{ borderRadius: r, background: `hsl(240 5% ${lightness}%)`, transform: `translateZ(${z}px)` }}
          />
        );
      })}

      {sides.map((style, i) => (
        <div key={i} className="absolute bg-[linear-gradient(90deg,#26262c,#5a5a63_50%,#26262c)]" style={style} />
      ))}

      {/* Side buttons */}
      <span
        className="absolute h-[64px] w-[6px] rounded-full bg-[#3c3c44]"
        style={{ left: w - 3, top: 150, transform: "rotateY(90deg)" }}
      />
      <span
        className="absolute h-[40px] w-[6px] rounded-full bg-[#3c3c44]"
        style={{ left: -3, top: 130, transform: "rotateY(-90deg)" }}
      />
    </>
  );
}
