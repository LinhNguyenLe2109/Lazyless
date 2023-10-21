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
        quaternary: 'var(--forth)',
        quinary: 'var(--fifth)',
      }
    },
  },
  plugins: [],
}

