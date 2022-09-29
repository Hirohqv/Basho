/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors:{
      'skydark':{
        50: '#F2F2F2',
        100: '#E6E6E6',
        200: '#CCCCCC',
        300: '#B3B3B3',
        400: '#999999',
        500: '#666666',
        600: '#4D4D4D',
        700: '#333333',
        800: '#1A1A1A',
        900: '#0D0D0D'
      },
      'skywhite': '#F9F9F9'
    },
    extend: {
      fontFamily: {
        sans: ['Inter']
      },
     
    },
  },
  plugins: [],
}
