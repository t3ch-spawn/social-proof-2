/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1200px" },
      lg: { max: "1024px" },
      lg2: { max: "850px" },
      md: { max: "650px" },
      sm: { max: "520px" },
      xsm: { max: "320px" },
    },

    extend: {
      colors: {
        lightMag: "hsl(300, 24%, 96%)",
        grayMag: "hsl(303, 10%, 53%)",
        darkMag: "hsl(300, 43%, 22%)",
        softPink: "hsl(333, 80%, 67%)",
      },
      fontFamily: {
        body: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
