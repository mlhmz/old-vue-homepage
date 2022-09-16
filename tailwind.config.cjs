/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "rgb(45 212 191)",
        'secondary': "#111827"
      },
      boxShadow: {
        'button-backglow': '0 0px 20px'
      }
    },
  },
  plugins: [],
}
