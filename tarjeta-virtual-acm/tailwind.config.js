/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', 
  ],
  theme: {
      extend: {
        colors: {
          "Blue-very-Dark": "#1C5081",
          "Blue-dark": "#2978A4",
          "Blue-dark-medium": "#007EA9",
        },
        fontFamily: {
          poppins:['poppins_700', 'sans-serif'],
          poppins:['poppins_500', 'sans-serrif'],
      },
    },
  },
  plugins: [],
}
