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
        
        // Primary playful colors (EdTech vibe)
        uv:      '#3B82F6', // Brighter, friendlier blue
        'uv-dim':'#DBEAFE', // Soft blue background
        'uv-bright': '#2563EB',
        
        // Playful accents
        coral:   '#FF6B6B',
        'coral-dim': '#FFE3E3',
        emerald: '#10B981',
        'emerald-dim': '#D1FAE5',
        amber:   '#F59E0B',
        'amber-dim': '#FEF3C7',
        purple:  '#8B5CF6',
        'purple-dim': '#EDE9FE',
        
        // type
        chalk:   '#1E293B', // Softer black/slate
        'chalk-dim': '#475569',
        muted:   '#64748B',
        
        // second accent
        warm:    '#F59E0B',
        'warm-bg': '#FEF3C7',
      },
      letterSpacing: {
        tightest: '-0.02em',
        widest2: '0.1em',
        widest3: '0.15em',
      },
      backgroundImage: {
        'gradient-uv': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'gradient-coral': 'linear-gradient(135deg, #FF6B6B 0%, #F59E0B 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
        'shimmer-uv': 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 40%, #3B82F6 60%, #10B981 100%)',
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