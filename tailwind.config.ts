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
        display: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-manrope)', 'sans-serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        void: '#08080a',
        surface: '#101114',
        card: '#15161a',
        border: '#272932',
        purple: {
          dim: '#2d254c',
          DEFAULT: '#7c5cff',
          bright: '#ad9bff',
          glow: '#b9a8ff',
        },
        gold: {
          dim: '#7b6325',
          DEFAULT: '#d6b85a',
          bright: '#f1d982',
        },
        teal: '#6bc7b1',
        rose: '#e88f7a',
        snow: '#f7f1e8',
        muted: '#96918a',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'line-sweep': 'lineSweep 5.5s ease-in-out infinite',
        'soft-pulse': 'softPulse 3.5s ease-in-out infinite',
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
      },
    },
  },
  plugins: [],
}

export default config
