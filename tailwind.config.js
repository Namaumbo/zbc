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
        heading: ["Poppins", "sans-serif"],
        heading_secondary: ["Raleway", "sans-serif"],
      },

      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        textColor: "var(--text-color)",
        bgcolor: "var(--background-color)",
        semi_heading_color: "var(--semi-heading-color)",
        brand_color: "var(--brand-color)",
        second_brand_color: "var(--second-bland-color)",
        footer_bg_color:"var(--footerbgcolor)"
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
};
