import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    // Only run fallback if native scroll-driven animations are not supported
    if (typeof CSS !== 'undefined' && !CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div ref={ref} className={`modern-scroll-reveal ${className}`}>
      {children}
    </div>
  );
}