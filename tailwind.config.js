/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'midnight': '#0F172A',
      },
      fontFamily: {
        'courier': ['Courier New', 'monospace']
      },
    },
  },
  plugins: [],
}

