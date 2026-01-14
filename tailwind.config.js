/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22C55E",
      },
       animation: {
      'spin-slow': 'spin 8s linear infinite',
    },
    },
  },
  plugins: [],
}
