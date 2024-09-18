/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1f5156',
        'custom-bg': '#f5f5f5', 
      },
      scale: {
        '103': '1.03', // Adding a custom scale value for a subtle hover effect
      },
    },
  },
  plugins: [],
}
