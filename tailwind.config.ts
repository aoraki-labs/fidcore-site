import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0c0e0d',
        'background-secondary': '#0c0e0d',
        'background-card': 'rgba(15, 15, 15, 0.6)',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'border-glow': 'rgba(0, 240, 255, 0.3)',
        cyan: {
          glow: '#00F0FF',
          DEFAULT: '#00F0FF',
          dark: '#00A8B3',
        },
        electric: {
          blue: '#3B82F6',
          DEFAULT: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-glow': 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
        'grid-pattern': `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 240, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 240, 255, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
