/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#019DD6",
        secondary: {
          100: "#F3F4F6",
          500: "#1E293B",
          600: "#0E172A"
        }
      },
      width: {
        "11xl": "1150px",
        "350": "380px"
      },
      height: {
        "7xl": "600"
      }
    },
  },
  plugins: [],
}

