/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: '#CE233F',
        secundaria: '#DC3954'
      },
      backgroundImage: {
        'home': "url('/src/img/home1.jpg')",
        'home2': "url('/src/img/home2.jpg')"
      },
      height: {
        'screen-minus-header-1': 'calc(100vh - 5rem)',
        'screen-minus-header-2': 'calc(100vh - 5rem)',
      },
      fontFamily: {
        lobster: ['Lobster', 'sans-serif'],
        'poppins-bold': ['Poppins-bold', 'sans-serif'],
        'poppins-medium': ['Poppins-medium', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'poppins-semibold': ['Poppins-semibold', 'sans-serif'],
      },
      keyframes:{
        wiggle:{
          '0%, 100%':{transform: 'translateY(0) scale(1)'},
          '50%': {transform: 'translateY(-8px) scale(1.1)'},
        },
      }
    },
  },
  plugins: [],
}

