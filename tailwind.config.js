/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
     colors: {
      'navcolor': '#b99995'
     },
     fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif']
     } 
    },
  },
  plugins: [],
}

