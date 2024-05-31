/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "680px", // Small
        xs: "480px", // Extra Small
        xxs: "360px", // Double Extra Small
      },
    },
  },
  plugins: [],
};
