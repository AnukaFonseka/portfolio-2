/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pnk: '#FF014F',
        wht: '#ECF0F3',
        blck: '#1E2125',
      },
    },
  },
  plugins: [],
};
