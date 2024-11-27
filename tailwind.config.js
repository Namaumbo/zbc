const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        coiny: ["Coiny", "system-ui"],
        title: ["Oswald", "sans-serif"],
        welcome: ["Zeyada", "cursive"],
        paragraph: ["Poppins", "sans-serif"],
        heading: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
};
