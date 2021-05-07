const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        100: '#D4E9E2',
        200: '#1E3932',
        300: '#000057',
        400: '#158C57',
        500: '#008248',
        600: '#CBA258',
        700: '#F1F8F5',
        800: '#F3F1E7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
