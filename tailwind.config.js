/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          DEFAULT: '#F8D4D6',
          50: '#FCF2F3',
          100: '#F8D4D6',
          200: '#F3B7BA',
          300: '#ED9A9E',
          400: '#E77D82',
        },
        charcoal: {
          DEFAULT: '#29292B',
          50: '#75757B',
          100: '#5F5F64',
          800: '#29292B',
          900: '#1A1A1C',
        },
        ivory: {
          DEFAULT: '#FFF9F7',
          50: '#FFFFFF',
          100: '#FFF9F7',
          200: '#FFF2EE',
          300: '#FEEAE4',
        },
        rose: {
          DEFAULT: '#D9A3A7',
          300: '#E5BAC0',
          400: '#D9A3A7',
          500: '#C7898E',
          600: '#B66F75',
        },
        mauve: {
          DEFAULT: '#9A6A6D',
          400: '#AB7B7E',
          500: '#9A6A6D',
          600: '#84575A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(41, 41, 43, 0.06)',
        'glass-hover': '0 12px 40px 0 rgba(41, 41, 43, 0.10)',
        'luxury': '0 20px 50px -10px rgba(41, 41, 43, 0.08)',
        'subtle': '0 4px 20px rgba(41, 41, 43, 0.04)',
      },
      letterSpacing: {
        'luxury': '0.22em',
        'editorial': '0.12em',
      },
      borderRadius: {
        'subtle': '3px',
      }
    },
  },
  plugins: [],
}
