/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vibe: "#f92763",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
};
