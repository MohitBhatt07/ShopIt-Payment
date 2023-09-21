/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        drop: {
          "0% ": {
            opacity: "0",
            transform: "rotateX(-90deg)",
          },
          "50%": {
            transform: "rotateX(-20deg)",
          },
          "100%": {
            opacity: "1",
            transform: "rotateX(0deg)",
          },
        },
      },
      animation : {
        'dropdown' : "drop 0.2s"
      },
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Nunito Sans",
      },
    },
  },
  plugins: [],
};
