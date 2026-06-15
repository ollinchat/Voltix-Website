/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f8fafc',
          subtle: '#f1f5f9',
        },
        voltix: {
          DEFAULT: '#1a2d4a',
          primary: '#1a2d4a',
          hover: '#2c4369',
          light: '#3b5d90',
          deep: '#0a0f1d',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#1a2d4a',
          700: '#142338',
          800: '#1e293b',
          900: '#0f172a',
        },
        midnight: {
          DEFAULT: '#1a2d4a',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#1a2d4a',
          700: '#142338',
          800: '#1e293b',
          900: '#0f172a',
        },
        slate: {
          command: '#f8fafc',
          panel: '#ffffff',
          border: 'rgba(26, 45, 74, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        industrial: '0.25em',
        wide: '0.15em',
      },
      backgroundImage: {
        'grid-command':
          'linear-gradient(rgba(26,45,74,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,45,74,0.05) 1px, transparent 1px)',
        blueprint:
          'linear-gradient(rgba(26,45,74,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,45,74,0.04) 1px, transparent 1px)',
        'blueprint-pattern':
          'linear-gradient(rgba(26,45,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,45,74,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        glow: '0 4px 24px rgba(26, 45, 74, 0.08)',
        panel: '0 1px 3px rgba(15, 23, 42, 0.06), 0 4px 16px rgba(15, 23, 42, 0.04)',
        card: '0 1px 2px rgba(15, 23, 42, 0.05), 0 8px 24px rgba(26, 45, 74, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
