/** @type {import('tailwindcss').Config} */

// Dark cyberpunk theme.
// The usual Tailwind colour names are re-mapped for a dark background:
// low numbers (50, 100, 200) are now dark tints and high numbers (700, 800, 900) are bright,
// so classes like `bg-slate-50`, `text-slate-900` or `bg-emerald-50 text-emerald-700`
// automatically read well on black.

const tint = (c) => ({
  50: c[0], 100: c[1], 200: c[2], 300: c[3], 400: c[4], 500: c[5], 600: c[6], 700: c[7], 800: c[8], 900: c[9],
});

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Chakra Petch"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        panel: '#0E0D1C',
        ink: { 950: '#05040B', 900: '#09081A', 800: '#100E24', 700: '#1A1736', 600: '#2A2550' },
        // Neutral greys, flipped: 50 = page background, 900 = brightest text.
        slate: tint(['#0A0915', '#16152A', '#24233A', '#33324F', '#7C7C9C', '#9C9CB9', '#B6B6CF', '#CFCFE4', '#E5E5F2', '#F6F6FC']),
        // Main neon: cyan.
        brand: tint(['#03202A', '#05313D', '#0A5466', '#0E7A92', '#3EF2FF', '#22E8FF', '#00DCF5', '#7DF8FF', '#A8FBFF', '#D2FDFF']),
        // Second neon: magenta.
        signal: '#FF2BD6',
        emerald: tint(['#05211A', '#083023', '#0E5139', '#167A55', '#2EE88A', '#39FF9A', '#1FE184', '#6BFFB4', '#9CFFCC', '#CBFFE4']),
        amber: tint(['#262106', '#352E08', '#5A4E0C', '#867510', '#F5E50A', '#FCEE0A', '#E6D80A', '#FFF35C', '#FFF78F', '#FFFBC2']),
        red: tint(['#2A0812', '#3B0B1A', '#66142E', '#981E45', '#FF4D7A', '#FF3B6B', '#E8234F', '#FF7FA0', '#FFA8BE', '#FFD1DC']),
        violet: tint(['#1A0B2E', '#25103F', '#3E1A66', '#5C27A0', '#A45CFF', '#B26BFF', '#9D4DFF', '#CDA3FF', '#DEC2FF', '#EEE0FF']),
        sky: tint(['#04192B', '#07263F', '#0C3F66', '#125E96', '#4CC3FF', '#38BDF8', '#0EA5E9', '#8AD8FF', '#B3E6FF', '#DAF3FF']),
        orange: tint(['#2A1505', '#3B1D07', '#66320C', '#984A12', '#FF9A4D', '#FF8A3D', '#F07020', '#FFB27A', '#FFCBA3', '#FFE4CF']),
        rose: tint(['#2A0820', '#3B0B2D', '#66144F', '#981E75', '#FF4DCF', '#FF2BD6', '#E61FBF', '#FF85E4', '#FFADEC', '#FFD6F5']),
      },
      boxShadow: {
        card: '0 0 0 1px rgba(34, 232, 255, 0.03), 0 10px 30px -14px rgba(0, 0, 0, 0.9)',
        lift: '0 0 0 1px rgba(34, 232, 255, 0.35), 0 0 28px -6px rgba(34, 232, 255, 0.35), 0 16px 40px -16px rgba(0, 0, 0, 0.9)',
        glow: '0 0 0 1px rgba(125, 248, 255, 0.6), 0 0 24px rgba(34, 232, 255, 0.55)',
        'glow-pink': '0 0 0 1px rgba(255, 43, 214, 0.5), 0 0 24px rgba(255, 43, 214, 0.45)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 20px) scale(0.95)' },
        },
        gridmove: { from: { backgroundPosition: '0 0' }, to: { backgroundPosition: '48px 48px' } },
        blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
        scan: { from: { transform: 'translateY(-100%)' }, to: { transform: 'translateY(100%)' } },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'drift-slow': 'drift 26s ease-in-out infinite reverse',
        gridmove: 'gridmove 6s linear infinite',
        blink: 'blink 1s step-end infinite',
        scan: 'scan 6s linear infinite',
      },
    },
  },
  plugins: [],
};
