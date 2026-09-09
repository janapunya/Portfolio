/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F1ECE1',
        'cream-2': '#e9e2d3',
        ink: '#15130f',
        black2: '#0a0a08',
        panel: '#131210',
        gold: '#cda86c',
        'gold-2': '#e4c98d',
        grey: '#8c887e',
        'grey-dim': '#5c594f',
        offwhite: '#f4f1ea',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
