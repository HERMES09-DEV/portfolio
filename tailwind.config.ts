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
        display: ['var(--font-geist)', 'sans-serif'],
        sans: ['var(--font-geist)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        void: '#05040a',
        surface: '#0d0a16',
        card: '#120e1d',
        border: '#251d38',
        purple: {
          dim: '#261049',
          DEFAULT: '#7c3aed',
          bright: '#a855f7',
          glow: '#c084fc',
        },
        gold: {
          dim: '#725719',
          DEFAULT: '#c9a84c',
          bright: '#f3d77b',
        },
        snow: '#f4efff',
        muted: '#9a8db8',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'line-sweep': 'lineSweep 5.5s ease-in-out infinite',
        'soft-pulse': 'softPulse 3.5s ease-in-out infinite',
        'symbol-glow': 'symbolGlow 4.8s ease-in-out infinite',
        'orbit': 'orbit 18s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        lineSweep: {
          '0%, 100%': { transform: 'translateX(-18%)', opacity: '0.35' },
          '50%': { transform: 'translateX(18%)', opacity: '0.85' },
        },
        softPulse: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        symbolGlow: {
          '0%, 100%': { opacity: '0.68', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.025)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
