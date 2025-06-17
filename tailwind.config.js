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
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'scroll': 'scroll 8s linear infinite',
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