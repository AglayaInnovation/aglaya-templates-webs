/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./avatar-jose.html",
    "./avatar-jesus.html",
    "./avatar-rodrigo.html",
    "./avatar-zacbe.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px', // Breakpoint para 375px
        'xl2': '1440px',  // Breakpoint para 1440px
      },
      colors: {
        'custom-light': 'hsla(0, 0%, 12%, 1)', // Color más claro
        'custom-dark': 'hsla(0, 0%, 0%, 1)',  // Color más oscuro
        'white-font':'hsla(0, 0%, 100%, 1)',
      },
      backgroundImage: {
        // 'custom-gradient': 'linear-gradient(to bottom, hsla(0, 0%, 12%, 1), hsla(0, 0%, 0%, 1))',
        'custom-background': "url('./images/bg-mobile.png')",
      },
      inset: {
        '22': '5.5rem', // Valor personalizado para top, right, bottom, left
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Añadir la fuente Poppins
      },
    },
  },
  plugins: [],
}
