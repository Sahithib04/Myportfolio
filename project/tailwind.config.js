/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'netflix-black': '#000000',
        'netflix-black-light': '#141414',
        'netflix-red': '#E50914',
        'netflix-grey': '#808080',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};