/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mitosite-beige': '#F9F0DD',
        'mitosite-beige-mid': '#E5D8C1',
        'mitosite-beige-dark': '#5A4B2E',
        'mitosite-pink': '#FDD6C9',
        'mitosite-black': '#342E20',
        'mitosite-green': '#6A8C75',
        'mitosite-red': '#CE695D',
        'mitosite-mustard': '#BFAD5B',
        'mitosite-purple': '#9B9DBC',
      },
      fontFamily: {
        'cardo': ['Cardo', 'serif'],
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-icons': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'square-to-circle-1': {
          '0%, 100%': { 
            borderRadius: '0', 
            transform: 'scale(1) translate(0, 0)',
          },
          '25%': { 
            borderRadius: '0 0 0 0', 
            transform: 'scale(1.1) translate(0, 0)',
          },
          '50%': { 
            borderRadius: '50% 0 0 0', 
            transform: 'scale(0.9) translate(10%, 10%)',
          },
          '75%': { 
            borderRadius: '100% 0 0 0', 
            transform: 'scale(0.8) translate(10%, 10%)',
          }
        },
        'square-to-circle-2': {
          '0%, 100%': { 
            borderRadius: '0', 
            transform: 'scale(1) translate(0, 0)',
          },
          '25%': { 
            borderRadius: '0 0 0 0', 
            transform: 'scale(1.1) translate(0, 0)',
          },
          '50%': { 
            borderRadius: '0 50% 0 0', 
            transform: 'scale(0.9) translate(-10%, 10%)',
          },
          '75%': { 
            borderRadius: '0 100% 0 0', 
            transform: 'scale(0.8) translate(-10%, 10%)',
          }
        },
        'square-to-circle-3': {
          '0%, 100%': { 
            borderRadius: '0', 
            transform: 'scale(1) translate(0, 0)',
          },
          '25%': { 
            borderRadius: '0 0 0 0', 
            transform: 'scale(1.1) translate(0, 0)',
          },
          '50%': { 
            borderRadius: '0 0 0 50%', 
            transform: 'scale(0.9) translate(10%, -10%)',
          },
          '75%': { 
            borderRadius: '0 0 0 100%', 
            transform: 'scale(0.8) translate(10%, -10%)',
          }
        },
        'square-to-circle-4': {
          '0%, 100%': { 
            borderRadius: '0', 
            transform: 'scale(1) translate(0, 0)',
          },
          '25%': { 
            borderRadius: '0 0 0 0', 
            transform: 'scale(1.1) translate(0, 0)',
          },
          '50%': { 
            borderRadius: '0 0 50% 0', 
            transform: 'scale(0.9) translate(-10%, -10%)',
          },
          '75%': { 
            borderRadius: '0 0 100% 0', 
            transform: 'scale(0.8) translate(-10%, -10%)',
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'scroll': 'scroll 8s linear infinite',
        'scroll-icons': 'scroll-icons 30s linear infinite',
        'square-to-circle-1': 'square-to-circle-1 6s ease-in-out infinite',
        'square-to-circle-2': 'square-to-circle-2 6s ease-in-out infinite',
        'square-to-circle-3': 'square-to-circle-3 6s ease-in-out infinite',
        'square-to-circle-4': 'square-to-circle-4 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  // Make sure snap utilities are not purged
  safelist: [
    'snap-y',
    'snap-mandatory',
    'snap-start',
    'snap-always',
    'scroll-smooth'
  ]
}