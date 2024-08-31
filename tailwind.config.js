/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#B4B4B4',
        customPurple: '#A259FF',
        customPurpleDark: '#613599',
        textMuted: '#7F7F7F',
        dark: '#000000',
        secondary: '#F5F5F5',
        darkGray: '#B4B4B4'
      },
      width: {
        'dasboardCardW': '600px',  
      },
      height: {
        'dasboardCardH': '586px', 
      },
    },
  },
  plugins: [],
}

