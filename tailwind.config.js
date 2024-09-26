/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        charkara: ["Chakra Petch", "sans-serif"], // Example: 'Roboto'
        coiny: ["Coiny", "sans-serif"], // Example: 'Merriweather'
      },
    },
  },
  plugins: [],
};
