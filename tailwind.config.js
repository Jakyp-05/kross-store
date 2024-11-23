/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "second-color": "#9D9D9D",
        "border-color": "#EAEAEA",
        "header-color": "#5C5C5C",
        "search-color": "#C4C4C4",
        "card-color": "#BDBDBD",
        "wish-list-color": "#F8F8F8",
        green: "#9DD458",
      },
    },
  },
  plugins: [],
};
