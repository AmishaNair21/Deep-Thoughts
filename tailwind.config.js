/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'custom-blue': '#0029FF',
      'custom-gray':"#616161",
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans-serif font
      },
    },},
  },
  plugins: [],
}

