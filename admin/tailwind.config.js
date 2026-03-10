/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        buenard: ['Buenard', 'serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        orange: "#FF7E2A",
        white: "#FFF8F8"
      }
    },
  },
  plugins: [],
}