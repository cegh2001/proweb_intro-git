/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001733", // azul marino
        secondary: "#B4002D", // rojo escarlata
        tertiary: "#FFFFFF", // blanco
        quaternary: "#5097FF", // azul cielo
        quinary: "#EBF747", // amarillo fosforecente
      },
      fontFamily: {
        anta: ["Anta", "sans-serif"],
      },
    },
  },
  plugins: [],
};
