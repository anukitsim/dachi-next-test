
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      fontFamily: {
        MPlus1: ["M PLUS 1", "sans-serif"],
      },
      colors: {
        'primary-gray': '#DBDBDBE2',
        
      },
    
    },

  },
  plugins: [],
}