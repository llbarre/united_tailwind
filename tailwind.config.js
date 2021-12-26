const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Open Sans',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        brandPrimary: '#2172BA',
        brandSecondary: '#1b4889'

      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
