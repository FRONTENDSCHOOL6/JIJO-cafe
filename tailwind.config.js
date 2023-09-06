/** @type {import('tailwindcss').Config} */
export default {
  // content: ['.index.html', '.src/**/*.jsx'],
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#DBC8AB",
        secondary: "#3E3526",
        black: "#252323",
        white: "#FFFFFF",
        darkGray: "#b7b7b7",
      },
      screens: {
        mobile: "390px",
        tablet: "728px",
        desktop: "1920px",
      },
    },
  },
  plugins: [],
};
