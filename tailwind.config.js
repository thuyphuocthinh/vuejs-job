/** @type {import('tailwindcss').Config} */
export default {
  // config which files will apply tailwind
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        // add extra classes
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
