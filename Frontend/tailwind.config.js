/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/img/background-dent.jpeg ')",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
