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
        primary: colors.orange,
        gray: colors.slate, 
        shade: 'rgba(0,0,0,0.3)'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.orange[600]'),
            '--tw-prose-headings': theme('colors.orange[800]'),
            '--tw-prose-lead': theme('colors.slate[600]'),
            '--tw-prose-links': theme('colors.orange[800]'),
            '--tw-prose-bold': theme('colors.orange[800]'),
            '--tw-prose-counters': theme('colors.orange[600]'),
            '--tw-prose-bullets': theme('colors.orange[400]'),
            '--tw-prose-hr': theme('colors.orange[300]'),
            '--tw-prose-quotes': theme('colors.orange[800]'),
            '--tw-prose-quote-borders': theme('colors.orange[300]'),
            '--tw-prose-captions': theme('colors.orange[700]'),
            '--tw-prose-code': theme('colors.orange[800]'),
            '--tw-prose-pre-code': theme('colors.orange[100]'),
            '--tw-prose-pre-bg': theme('colors.orange[800]'),
            '--tw-prose-th-borders': theme('colors.orange[300]'),
            '--tw-prose-td-borders': theme('colors.orange[200]'),
            '--tw-prose-invert-body': theme('colors.orange[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.orange[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.orange[400]'),
            '--tw-prose-invert-bullets': theme('colors.orange[600]'),
            '--tw-prose-invert-hr': theme('colors.orange[700]'),
            '--tw-prose-invert-quotes': theme('colors.orange[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.orange[500]'),
            '--tw-prose-invert-captions': theme('colors.orange[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.orange[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.orange[500]'),
            '--tw-prose-invert-td-borders': theme('colors.orange[500]'),
          },
        },
      }),
    },
  },
  
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
