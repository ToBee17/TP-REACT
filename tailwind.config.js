/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FC5200",
        secondary: "#C94100",
        beige: "#F9F8F5",
        grey: "E6E6E6",
      },
    },
  },
  plugins: [],
}