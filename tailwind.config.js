/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#060A13',
          900: '#0B1220',
          800: '#111A2E',
          700: '#1C2740',
          600: '#2A3756',
        },
        brand: {
          50: '#EEF4FF',
          100: '#DCE7FF',
          200: '#B9CFFF',
          400: '#5B8DFF',
          500: '#3B72F6',
          600: '#2457E6',
          700: '#1B44BD',
        },
        signal: '#22D3EE',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 16px -8px rgba(15, 23, 42, 0.10)',
        lift: '0 2px 4px rgba(15, 23, 42, 0.05), 0 12px 32px -12px rgba(15, 23, 42, 0.22)',
        glow: '0 0 0 1px rgba(91, 141, 255, 0.35), 0 8px 32px -8px rgba(36, 87, 230, 0.55)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 20px) scale(0.95)' },
        },
        gridmove: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '48px 48px' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'drift-slow': 'drift 26s ease-in-out infinite reverse',
        gridmove: 'gridmove 6s linear infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
