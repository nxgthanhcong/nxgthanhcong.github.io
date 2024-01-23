/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calibre: ["Calibre", "sans-serif"],
        sfMono: ["SFMono", "sans-serif"],
      },
      colors: {
        customBackgroud: "rgb(1 20 36 / 1)",
        customBlue: "#0000ff",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
