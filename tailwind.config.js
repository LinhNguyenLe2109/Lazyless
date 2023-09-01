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
        majorText: 'var(--majorText)',
        quaternary: 'var(--quaternary)',
        quinary: 'var(--quinary)',
      }
    },
  },
  plugins: [],
}

