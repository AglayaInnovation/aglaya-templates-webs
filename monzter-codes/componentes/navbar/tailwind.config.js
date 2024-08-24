/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Incluye todos los archivos HTML en el directorio actual
    './src/**/*.{js,jsx,ts,tsx}', // Incluye archivos JavaScript, JSX, TS y TSX en el directorio src
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px', // Nuevo breakpoint para pantallas de 300px o más
      },
      fontSize: {
        'xxs': ['0.425rem', { lineHeight: '0.575rem' }], // 10px font-size, 14px line-height
      },
      backdropSaturate: {
        '180': '180%',
      },
      colors: {
        'custom-blue': '#00B2FF',
      },
      fontFamily: {
        Inter:['Inter'],
        Cousine:['Cousine']
      },
      backgroundImage: {
        'custom-pattern': "url('./images/mc_textura.svg')",
      },
    },
  },
  plugins: [
  ],
}

