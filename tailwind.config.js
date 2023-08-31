/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3A506b',
        secondary: '#5BC0BE',
        tertiary: '#6FFFE9',
        quaternary: '#1C2541',
        quinary: '#0B132B',
      }
    },
  },
  plugins: [],
}

