/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
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
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("flowbite/plugin"),
  ],
};
