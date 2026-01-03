/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#000000',
          gold: '#C29A29',
          lightGold: '#D4B357',
        },
      },
    },
  },
  plugins: [],
};