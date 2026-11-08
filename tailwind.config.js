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
          bg: '#FBFBFA',
          cream: '#FFFDF9',
          card: '#FFFFFF',
          border: '#E2E8F0',
          dark: '#0F172A',
          gold: '#D97706',
          goldLight: '#FDE68A',
          amber: '#F59E0B',
          teal: '#0D9488',
          tealLight: '#CCFBF1'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(15, 23, 42, 0.05)',
        'soft': '0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
        'soft-lg': '0 20px 40px -10px rgba(15, 23, 42, 0.08), 0 8px 16px -4px rgba(15, 23, 42, 0.03)',
        'soft-gold': '0 10px 30px -5px rgba(217, 119, 6, 0.12)',
      }
    },
  },
  plugins: [],
}
