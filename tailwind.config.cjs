/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**.tsx',
  ],
  theme: {
    extend: {
      spacing: {
        '98': '25rem',
      }
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors:{
     'deep-blue': '#2B5DA7',
     'bright-white': '#FFFFFF',
     'gray-shadow': '#D0D0D0',
     'inactive-blue': '#61799D',
     'incorrect-red': '#E05656',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#F8F8F8',
      },
    },
    extend: {
      fontFamily: {
        sans: '"Nato Sans", sans-serif'
      },
    },
  },
  plugins: [],
}
