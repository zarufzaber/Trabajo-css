/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        ssx: ['38px', '35px'],
        sxs: ['10px', '10px'],
      },
      colors:{
        'morao':"#4748d8",
        'naranja':"#C45308"
      },
    },
  },
  plugins: [],
}
