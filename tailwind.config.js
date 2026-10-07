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
        // clean & clinical, light base
        void:    '#FFFFFF',
        panel:   '#F8FAFC',
        surface: '#FFFFFF',
        edge:    '#E2E8F0',
        'edge-bright': '#CBD5E1',
        // accent — blue, with teal/violet as supporting discipline colours
        uv:      '#2563EB',
        'uv-dim':'#93C5FD',
        'uv-bright': '#1D4ED8',
        // supporting discipline colours — used sparingly, never as the primary accent
        'glow-cyan':    '#0D9488',
        'glow-magenta': '#7C3AED',
        'indigo-deep':  '#EFF6FF',
        // type
        chalk:   '#0F172A',
        'chalk-dim': '#475569',
        muted:   '#64748B',
        // alternate section tint
        paper:   '#F1F5F9',
        // second accent — warm, for highlights and real numbers; never the primary CTA color
        warm:    '#C2650C',
        'warm-bg': '#FFF7ED',
      },
      letterSpacing: {
        tightest: '-0.02em',
        widest2: '0.2em',
        widest3: '0.3em',
      },
      backgroundImage: {
        'gradient-uv': 'linear-gradient(135deg, #0F172A 0%, #2563EB 55%, #0EA5E9 100%)',
        'gradient-radial-uv': 'radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%)',
        'shimmer-uv': 'linear-gradient(90deg, #2563EB 0%, #1D4ED8 40%, #2563EB 60%, #0EA5E9 100%)',
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