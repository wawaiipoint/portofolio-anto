/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0EA5E9', 
          gold: '#FFD700',
          dark: '#0F172A',    
          lightBg: '#F8FAFC', 
        },
        gradient: {
          start: '#38BDF8',   
          end: '#0284C7',     
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}