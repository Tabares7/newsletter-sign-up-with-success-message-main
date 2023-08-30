/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        tomato: "hsl(4, 100%, 67%)",
        paleblack: "hsl(234, 29%, 20%)",
      }
    },
  },
  plugins: [],
}