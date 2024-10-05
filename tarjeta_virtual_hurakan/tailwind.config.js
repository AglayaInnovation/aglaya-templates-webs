/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xx': '1000px',
      },
      margin: {
        '-90': '-360px',
        '-100': '-110px'
      },
      scale: {
        '35': '0.35',
        '40': '0.40',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #001F36, #000C15, #000000)',
      },
      fontFamily: {
        'sacramento': ['Sacramento', 'sans-serif'], 
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#001F36',
        'custom-yellow': '#FBFFCD',
        'custom-font': 'rgba(36, 57, 68, 0.39)', 
      },
    },
  },
  plugins: [],
}

