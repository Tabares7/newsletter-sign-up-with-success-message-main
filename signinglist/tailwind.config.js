/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        tomato: "hsl(4, 100%, 67%)"
      }
    },
  },
  plugins: [],
}