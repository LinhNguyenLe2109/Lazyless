/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        third: 'var(--third)',
        forth: 'var(--forth)',
        fifth: 'var(--fifth)',
      }
    },
  },
  plugins: [],
}

