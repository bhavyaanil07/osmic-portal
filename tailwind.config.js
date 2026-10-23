/** @type {import('tailwindcss').Config} */

// Dark theme in a deep teal / steel / ice-blue palette.
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
        // Palette: deep teal #1A3E50, steel blue #345A6D, ice blue #DDEBF5, slate #3D4E56, dark slate #2F434A, charcoal #2B2D33.
        panel: '#232A30',
        ink: { 950: '#141A1F', 900: '#1A3E50', 800: '#21495E', 700: '#2F434A', 600: '#345A6D' },
        // Neutral greys, flipped: 50 = page background, 900 = brightest text (ice blue).
        slate: tint(['#1B2024', '#2A3237', '#33424A', '#3D4E56', '#7E909A', '#9DB0BB', '#B5C6D0', '#CBDAE3', '#DDEBF5', '#EEF5FA']),
        // Main accent: ice blue on deep teal.
        brand: tint(['#18323F', '#1A3E50', '#24506A', '#345A6D', '#9CC3DA', '#BFD9E9', '#DDEBF5', '#EAF3FA', '#F2F8FC', '#F8FBFD']),
        // Second accent: soft steel blue.
        signal: '#8DBBD6',
        emerald: tint(['#17302A', '#1C3B33', '#285548', '#367262', '#6FD1AA', '#7FDAB5', '#5FC9A0', '#9BE3C6', '#BDEDD9', '#DDF6EC']),
        amber: tint(['#302A18', '#3B331D', '#5A4D2A', '#7A6838', '#E8CB74', '#EED48A', '#E5C468', '#F1DC9D', '#F6E8C1', '#FBF4E0']),
        red: tint(['#33201F', '#3F2726', '#5E3735', '#804846', '#E89090', '#EC9E9E', '#E07A7A', '#F1B3B3', '#F6CDCD', '#FBE6E6']),
        violet: tint(['#25223A', '#2D2946', '#433D66', '#5C548A', '#ADA4E0', '#BAB2E8', '#9D93D6', '#CCC6EF', '#DEDAF5', '#EFEDFA']),
        sky: tint(['#18303D', '#1D3A4A', '#28546B', '#357190', '#8CC5E3', '#A3D2EA', '#74B6DA', '#BEDEF0', '#D6EAF6', '#EBF5FB']),
        orange: tint(['#33261B', '#3F2E20', '#5E432D', '#80593B', '#EBAE7E', '#EFBB92', '#E59A62', '#F3CBAB', '#F8DDC8', '#FCEFE4']),
        rose: tint(['#1F3540', '#24404E', '#335B6E', '#40728A', '#A9CBDD', '#BBD6E5', '#8DBBD6', '#CFE2EC', '#E1EDF3', '#F0F6F9']),
      },
      boxShadow: {
        card: '0 1px 0 rgba(221, 235, 245, 0.03) inset, 0 12px 30px -16px rgba(0, 0, 0, 0.75)',
        lift: '0 0 0 1px rgba(156, 195, 218, 0.35), 0 0 26px -8px rgba(156, 195, 218, 0.3), 0 18px 40px -18px rgba(0, 0, 0, 0.8)',
        glow: '0 0 0 1px rgba(221, 235, 245, 0.45), 0 0 22px rgba(156, 195, 218, 0.35)',
        'glow-pink': '0 0 0 1px rgba(141, 187, 214, 0.45), 0 0 20px rgba(141, 187, 214, 0.35)',
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
        flow: { to: { strokeDashoffset: '-400' } },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'drift-slow': 'drift 26s ease-in-out infinite reverse',
        gridmove: 'gridmove 6s linear infinite',
        blink: 'blink 1s step-end infinite',
        scan: 'scan 6s linear infinite',
        flow: 'flow 14s linear infinite',
        'flow-slow': 'flow 22s linear infinite',
      },
    },
  },
  plugins: [],
};
