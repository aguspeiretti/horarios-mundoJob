/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".border-radial": {
          border: "8px solid transparent", // Define el grosor del borde
          borderImage:
            "radial-gradient(circle, #937989 34%, #AF0BEC 50%, #4b4b4b 90%, #ffffff 100%)",
          borderImageSlice: 1,
        },
      });
    },
  ],
};
