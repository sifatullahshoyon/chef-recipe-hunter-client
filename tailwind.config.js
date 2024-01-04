/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue': ['Helvetica Neue' , 'sans-serif'],
      },
      color: {
        'red-merun': '#84100F',
      },
    },
  },
  plugins: [require("daisyui")],
}

