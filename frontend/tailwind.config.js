/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prata: ['Prata', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: "#1A1A1A",      // Deep Charcoal
        accent: "#C5A880",       // Muted Gold/Beige
        background: "#FAFAFA",   // Soft Off-White
        surface: "#FFFFFF",      // Pure White
        muted: "#8C8C8C"         // Soft Gray for secondary text
      }
    },
  },
  plugins: [],
}