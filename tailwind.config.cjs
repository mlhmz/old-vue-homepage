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
        'secondary': "#32303b"
      },
    },
  },
  plugins: [],
}
