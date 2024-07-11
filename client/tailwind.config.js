/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(225,177,54,1) 85%);'
      }
    },
    
  },
  plugins: [],
  
}