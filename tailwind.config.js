/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{html,md}", 
    "./layouts/**/*.{html,md}", 
    "./themes/eco/content/**/*.{html,md}", 
    "./themes/eco/layouts/**/*.{html,md}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "bumblebee"],
  },
}

