/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "food-banner": "url('/foodBanner2.jpg')",
      },
    },
    colors: {
      ...colors,
      primary_green: "#82c126",
      selected_green: "#6fa321",
    },
  },
  plugins: [],
};
