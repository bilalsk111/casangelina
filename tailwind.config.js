/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'notera': ['Notera', 'cursive'],
        'geo-light': ['GeometriaLight', 'sans-serif'], // Matches the fix above
        'geometria': ['Geometria', 'sans-serif'],
        'geometria-med': ['Geometria2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}