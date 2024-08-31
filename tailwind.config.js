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
        dark: '#000000'
      },
    },
  },
  plugins: [],
}

