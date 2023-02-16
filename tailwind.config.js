const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
   "./pages/**/*.{js,ts,jsx,tsx}",
   "./components/**/*.{js,ts,jsx,tsx}",

   // Or if using `src` directory:
   "./src/**/*.{js,ts,jsx,tsx}",
 ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.lime,
        //@ts-ignore
        gray: colors.neutral, 
        shade: 'rgba(0,0,0,0.3)'
      },
    },
  },
  plugins: [],
}
