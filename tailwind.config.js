/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-color': '#015249',
        'theme-color-light': '#57BC90',
        'theme-color-dark': '#043933',
        'background-color': '#F3F3F3',
        'theme-gradient-light': '#57BC90',
        'theme-gradient-dark': '#004B40',
        'theme-edit-bg': '#39B54A',
        'theme-delete-bg': '#D80000',
        'theme-edit-text': '#008212',
        'theme-delete-text': '#D80000',
        'theme-delete-gray': '#A5A5AF',
      },
      screens: {
        'mb': '350px',
        'mbx': '500px',
      },
    },
  },
  plugins: [],
}

