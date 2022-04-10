const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Heebo", "sans-serif"],
    },
    extend: {
      colors: {
        currentColor: colors.currentColor,
        currentFill: colors.currentFill,
        white: colors.white,
        primary: "#3772ff",
        black: "#242424",
        gray: "#383838",
      },
    },
  },
  plugins: [],
};
