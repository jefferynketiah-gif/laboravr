import { useRef, useState } from 'react';

/**
 * GlowCard — card with a mouse-tracked radial glow border.
 * Pass className for sizing / layout. Children render inside.
 */
export default function GlowCard({ children, className = '', innerClassName = '' }) {
  const cardRef = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setGlow((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl border border-edge bg-panel transition-colors duration-300 hover:border-uv/40 ${className}`}
      style={{
        background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(124,92,255,${glow.opacity * 0.08}) 0%, transparent 60%), #12141C`,
        transition: 'background 0.1s ease, border-color 0.3s ease',
      }}
    >
      {/* Glow border overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(124,92,255,${glow.opacity * 0.25}) 0%, transparent 55%)`,
          opacity: glow.opacity,
          transition: 'opacity 0.4s ease',
        }}
      />
      <div className={`relative ${innerClassName}`}>{children}</div>
    </div>
  );
}
