/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mitosite-beige': '#F7E9CF',
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
    },
  },
  plugins: [],
}