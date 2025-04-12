/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kaushan: ["Kaushan-Script", "cursive"],
        Sirin: ["Sirin-Stencil", "sans-serif"],
      },
    },
  },
  plugins: [],
};
