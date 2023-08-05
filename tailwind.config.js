/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        smlg: "1023px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
