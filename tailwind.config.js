/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'narrow': { 'max': '650px' },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)"],
      },
    },
  },
  plugins: [],
};
