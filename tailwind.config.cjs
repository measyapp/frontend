/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors:{
     'deep-blue': '#19478D',
     'bright-white': '#FFFFFF',
     'gray-shadow': '#D0D0D0',
     'inactive-blue': '#61799D',
     'incorrect-red': '#E05656',
     'correct-green': '#359851',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#F8F8F8',
      },
    },
    extend: {
      spacing:{
        '98': '25rem'
      },
      spacing:{
        '98': '25rem'
      },
      screens:{
        'xs': '1px'
      },
      width:{
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        'hd'  : '1000px'
      },
      height:{
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        'hd'  : '1000px'
      },
      fontFamily: {
        sans: '"Nato Sans", sans-serif'
      },
    },
  },
  plugins: [],
}
