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
        // darkroom
        void:    '#0A0B10',
        panel:   '#12141C',
        surface: '#161820',
        edge:    '#1F2230',
        'edge-bright': '#2A2E45',
        // uv accent
        uv:      '#7C5CFF',
        'uv-dim':'#4A3A99',
        'uv-bright': '#9B80FF',
        // atmosphere — never on UI elements
        'glow-cyan':    '#22D3EE',
        'glow-magenta': '#E879F9',
        'indigo-deep':  '#1E1B4B',
        // type
        chalk:   '#E8E9F0',
        'chalk-dim': '#B0B4C8',
        muted:   '#6B6F80',
        // light sections
        paper:   '#F7F7FA',
      },
      letterSpacing: {
        tightest: '-0.05em',
        widest2: '0.2em',
        widest3: '0.3em',
      },
      backgroundImage: {
        'gradient-uv': 'linear-gradient(135deg, #E8E9F0 0%, #B8A0FF 45%, #7C5CFF 100%)',
        'gradient-radial-uv': 'radial-gradient(circle, rgba(124,92,255,0.4), transparent 70%)',
        'shimmer-uv': 'linear-gradient(90deg, #7C5CFF 0%, #9B80FF 40%, #7C5CFF 60%, #6B4AF0 100%)',
      },
      boxShadow: {
        'glow-sm':  '0 0 20px rgba(124,92,255,0.4)',
        'glow-md':  '0 0 40px rgba(124,92,255,0.35), 0 0 80px rgba(124,92,255,0.1)',
        'glow-lg':  '0 8px 60px -8px rgba(124,92,255,0.7)',
        'glow-xl':  '0 12px 80px -6px rgba(124,92,255,0.9)',
        'glass':    'inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 20px rgba(0,0,0,0.4)',
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