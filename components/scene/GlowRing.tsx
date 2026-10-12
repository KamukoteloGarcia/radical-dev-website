// Neon ring the phone passes through. The bright spot travels around it.
const ringStyle = {
  background:
    "conic-gradient(from 0deg, #ff3b4a, #ffb3b8 10%, #e3343f 28%, #5c0710 55%, #e3343f 80%, #ff3b4a)",
  mask: "radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 4px))",
};

export function GlowRing() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-[60px] top-[30px] size-[560px] transform-3d"
      style={{ transform: "rotateX(74deg) rotateY(-12deg)" }}
    >
      <div className="absolute inset-0 rounded-full drop-shadow-[0_0_10px_var(--red-bright)]">
        <div className="size-full rounded-full motion-safe:animate-orbit" style={ringStyle} />
      </div>
      <div className="absolute inset-[44px] rounded-full border border-red/25" />
    </div>
  );
}
