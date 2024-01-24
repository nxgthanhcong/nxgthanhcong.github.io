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
        hoverBackground: "rgba(255,255,255,0.1)",
      },
      boxShadow: {
        hoverShadow: "-1px_1px_10px_4px_rgba(0,0,0,0.02)",
      },
      borderColor: {
        hoverBorder: "rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
};
