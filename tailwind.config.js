/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        // friendly & clean light base
        void:    '#FFFFFF',
        panel:   '#F8FAFC',
        surface: '#FFFFFF',
        edge:    '#E2E8F0',
        'edge-bright': '#CBD5E1',
        
        // Brand palette approved by the owner on 14 Nov 2026 (IGCSEVRLab marketing/01-BRAND.md).
        // Labora blue is the only "act on this" colour.
        uv:      '#2563EB', // Labora blue
        'uv-dim':'#DBEAFE', // soft blue background
        'uv-bright': '#1D4ED8', // hover

        // type and dark surfaces
        chalk:   '#0F172A', // Ink
        ink:     '#0F172A',
        'ink-2': '#16213A', // a raised surface on ink
        'chalk-dim': '#475569',
        muted:   '#64748B',

        // second accent: real numbers and facts only, never a button
        warm:    '#C2650C',
        'warm-bg': '#FFF7ED',
        ochre:   '#D9972B', // large numerals and shapes on dark; never small text on white
        bench:   '#1D6B63', // the lab's own teal, for anything that shows the inside of the lab

        // subject tags (small dots and labels only)
        physics: '#0D9488',
        biology: '#7C3AED',
        'glow-cyan': '#0D9488',
        'glow-magenta': '#7C3AED',
      },
      letterSpacing: {
        tightest: '-0.02em',
        widest2: '0.1em',
        widest3: '0.15em',
      },
      backgroundImage: {
        'gradient-uv': 'linear-gradient(135deg, #2563EB 0%, #1D6B63 100%)',
      },
      boxShadow: {
        'glow-sm':  '0 1px 2px rgba(15,23,42,0.06), 0 4px 10px -2px rgba(37,99,235,0.18)',
        'glow-md':  '0 4px 16px -4px rgba(15,23,42,0.1), 0 2px 6px -2px rgba(37,99,235,0.15)',
        'glow-lg':  '0 12px 28px -10px rgba(15,23,42,0.16)',
        'glow-xl':  '0 18px 40px -14px rgba(15,23,42,0.2)',
        'glass':    'inset 0 1px 0 rgba(255,255,255,0.6), 0 4px 20px rgba(15,23,42,0.06)',
      },
      animation: {
        fadeIn:    'fadeIn 0.5s ease-in-out',
        slideUp:   'slideUp 0.6s ease-out',
        shimmer:   'shimmer 1.4s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% center' },
          to:   { backgroundPosition:  '200% center' },
        },
      },
    },
  },
  plugins: [],
}