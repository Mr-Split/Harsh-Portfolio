/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#042c42",
        "secondary" : "#F97316",
        "tertiary" : "#08d489",
      }
    },
    screens: {
      sm: { max:'1000px' },

      lg: { max:'2024px' },
    }
  },
  plugins: [],
}