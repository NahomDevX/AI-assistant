/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'primary': '#3ecf8e',
          'primary-dark': '#24b47e',
          'primary-light': '#6ee7b7',
          'secondary': '#4b7bec',
        }
      },
    },
    plugins: [],
  }