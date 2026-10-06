/*
  HeroVisual.jsx
  --------------
  A cinematic, code-based abstract visual for the hero section.
  Represents a core (atom/data/VR nucleus) with orbital rings and data nodes.
  Pure CSS, smooth animations, highly performant.
*/

export default function HeroVisual() {
  return (
    <div
      className="relative w-full h-full min-h-[400px] flex items-center justify-center select-none"
      style={{ perspective: "1200px" }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes hv-core-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 40px 10px rgba(124,92,255,0.4); }
          50%      { transform: scale(1.05); opacity: 1; box-shadow: 0 0 60px 20px rgba(34,211,238,0.5); }
        }
        @keyframes hv-ring-x {
          from { transform: rotateX(60deg) rotateY(20deg) rotateZ(0deg); }
          to   { transform: rotateX(60deg) rotateY(20deg) rotateZ(360deg); }
        }
        @keyframes hv-ring-y {
          from { transform: rotateX(120deg) rotateY(45deg) rotateZ(0deg); }
          to   { transform: rotateX(120deg) rotateY(45deg) rotateZ(-360deg); }
        }
        @keyframes hv-ring-z {
          from { transform: rotateX(30deg) rotateY(70deg) rotateZ(0deg); }
          to   { transform: rotateX(30deg) rotateY(70deg) rotateZ(360deg); }
        }
        @keyframes hv-float {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-20px); }
        }
        .hv-wrapper { animation: hv-float 6s ease-in-out infinite; transform-style: preserve-3d; }
        .hv-core    { animation: hv-core-pulse 4s ease-in-out infinite; }
        .hv-orbit-1 { animation: hv-ring-x 18s linear infinite; transform-style: preserve-3d; }
        .hv-orbit-2 { animation: hv-ring-y 24s linear infinite; transform-style: preserve-3d; }
        .hv-orbit-3 { animation: hv-ring-z 30s linear infinite; transform-style: preserve-3d; }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.15)_0%,transparent_60%)] pointer-events-none" />

      <div className="hv-wrapper relative z-10 w-[300px] h-[300px] flex items-center justify-center">
        
        {/* Core Glowing Sphere */}
        <div className="hv-core absolute w-16 h-16 rounded-full bg-gradient-to-br from-uv to-cyan-400 z-10 blur-[2px]" />
        <div className="hv-core absolute w-12 h-12 rounded-full bg-white z-20 opacity-80" />

        {/* Orbital Ring 1 */}
        <div className="hv-orbit-1 absolute w-[260px] h-[260px] rounded-full border border-uv/30" style={{ borderStyle: "dashed" }}>
          {/* Node on ring */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
        </div>

        {/* Orbital Ring 2 */}
        <div className="hv-orbit-2 absolute w-[320px] h-[320px] rounded-full border border-cyan-400/20" style={{ borderStyle: "dashed" }}>
          {/* Nodes on ring */}
          <div className="absolute bottom-1/4 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-uv rounded-full shadow-[0_0_20px_rgba(124,92,255,0.8)]" />
          <div className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </div>

        {/* Orbital Ring 3 (Inner) */}
        <div className="hv-orbit-3 absolute w-[180px] h-[180px] rounded-full border border-purple-400/40" style={{ borderStyle: "dotted", borderWidth: "2px" }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
        </div>

        {/* Outer subtle rings for depth */}
        <div className="absolute w-[400px] h-[400px] rounded-full border border-edge/40" style={{ transform: "rotateX(75deg)" }} />
        <div className="absolute w-[420px] h-[420px] rounded-full border border-edge/20" style={{ transform: "rotateX(75deg) rotateY(15deg)" }} />

      </div>
    </div>
  );
}
