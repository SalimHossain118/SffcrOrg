/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // bodyColor: "#212428",
        bodyColor: "#ffffff",
        coralred: "#FF6452",
        deepBlue: "#193E65",

        //=> this is for black backgrounds..
        // lightText: "#c4cfde",
        // this is for light
        lightText: "#758598",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },

      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      backgroundImage: {
        homePageBg: "url('assets/bgImages/cn.jpg')",
      },
    },
  },
  plugins: [],
};
