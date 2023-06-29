/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#161616",
        "primary-dark": "#525252",
        "gray": "#e0e0e0",
        "gray-light": "#e5e5e5",
        "blue": "#0f62fe",
        "blue-dark": "#0353e9",
        "dark": "#323232",
      }
    },
  },
  plugins: [],
}

