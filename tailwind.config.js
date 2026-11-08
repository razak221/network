/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#FAF9F5',
          cream: '#FFFDF9',
          card: '#FFFFFF',
          border: 'rgba(226, 232, 240, 0.85)',
          slate: '#0F172A',
          gold: '#C5832B',
          goldHover: '#A86C1D',
          goldLight: '#FEF3C7',
          goldMuted: '#F59E0B',
          emerald: '#059669',
          emeraldLight: '#D1FAE5'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        luxury: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury-sm': '0 2px 10px -2px rgba(15, 23, 42, 0.04)',
        'luxury': '0 12px 36px -8px rgba(15, 23, 42, 0.06), 0 4px 12px -2px rgba(15, 23, 42, 0.02)',
        'luxury-lg': '0 24px 60px -12px rgba(15, 23, 42, 0.1), 0 8px 24px -4px rgba(15, 23, 42, 0.04)',
        'gold-glow': '0 12px 30px -6px rgba(197, 131, 43, 0.25)',
      }
    },
  },
  plugins: [],
}
