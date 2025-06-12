/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // include all files inside src
    "./public/index.html"         // optional: if you use Tailwind in HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

