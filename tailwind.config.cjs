/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

      fontFamily: {
        'mont': ['Montserrat'],
        'futura':['Futura'],

    },
    extend: {
      colors:{
        'morao':"#4748d8",
        'naranja':"#C45308"
      },
    },
  },
  plugins: [],
}