// Neon ring the phone passes through. The glow is a static box-shadow (painted once);
// only the bright spot spins, which runs on the GPU compositor.
const sparkStyle = {
  background: "conic-gradient(from 0deg, #ffd1d4, #ff3b4a 8%, transparent 30%, transparent 100%)",
  mask: "radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 4px))",
};

export function GlowRing() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-[60px] top-[30px] size-[560px] transform-3d"
      style={{ transform: "rotateX(74deg) rotateY(-12deg)" }}
    >
      <div className="absolute inset-0 rounded-full border-[3px] border-red shadow-[0_0_18px_var(--red-bright),inset_0_0_18px_var(--red-bright)]" />
      <div className="absolute inset-0 rounded-full motion-safe:animate-orbit" style={sparkStyle} />
      <div className="absolute inset-[44px] rounded-full border border-red/25" />
    </div>
  );
}
