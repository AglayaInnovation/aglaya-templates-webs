/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'], // Usa comillas dobles para nombres con espacios
      },
      backgroundImage: {
        'custom-diagonal-gradient': 'linear-gradient(to bottom right, #272f3a, #0a0d12)',
      },
      colors: {
        orange_dark: '#C16938',
        orange_name: '#BF8B0833',
      },
    },
  },
  plugins: [],
}