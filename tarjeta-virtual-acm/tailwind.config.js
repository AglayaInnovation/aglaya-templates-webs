/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', 
  ],
  theme: {
      extend: {
        maxWidth:{
          '390': '390px',
        },
        maxHeight: {
          '844': '844px',
        },
        minWidth: {
          '360': '360px',
        },
        minHeight: {
          '640': '640px',
        },
        colors: {
          "Blue-very-Dark": "#1C5081",
          "Blue-dark": "#2978A4",
          "Blue-dark-medium": "#007EA9",
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
