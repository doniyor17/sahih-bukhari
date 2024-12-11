/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  jit: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorDarkest: "#ddd",
        colorDark: "green",
        colorMedium: "#ced4da",
        colorLight: "#f1f3f5",
        colorTheme: "rgb(34, 90, 34)",
        colorAccent: "#ffa94d",
      },
    },
  },
  plugins: [],
};
