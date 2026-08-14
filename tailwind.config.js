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
        void: '#0A0B10',
        panel: '#12141C',
        edge: '#1F2230',
        // uv accent
        uv: '#7C5CFF',
        'uv-dim': '#4A3A99',
        // atmosphere only — never used on UI elements
        'glow-cyan': '#22D3EE',
        'glow-magenta': '#E879F9',
        'indigo-deep': '#1E1B4B',
        // type
        chalk: '#E8E9F0',
        muted: '#6B6F80',
        // light sections
        paper: '#F7F7FA',
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}