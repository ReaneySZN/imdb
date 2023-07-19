/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0f171e",
        secondaryColor: "#1a242f",
        fontPrimary: "#ffffff",
        fontSecondary: "#79b8f3",
      },
    },
  },
  plugins: [],
};
