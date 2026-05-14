import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-ibm-mono)', 'monospace'],
      },
      colors: {
        void: '#07050f',
        surface: '#0f0c1a',
        card: '#13101f',
        border: '#1e1830',
        purple: {
          dim:    '#3b2170',
          DEFAULT:'#7c3aed',
          bright: '#ab78f8',
          glow:   '#9d6ee8',
        },
        gold: {
          dim:    '#7a5c1a',
          DEFAULT:'#c9a84c',
          bright: '#e8c96e',
        },
        snow: '#f0ecff',
        muted: '#7a6e96',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'flicker': 'flicker 4s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}

export default config
