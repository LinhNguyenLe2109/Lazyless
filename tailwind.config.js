/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      "3xs": "240px",
      "2xs": "320px",
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        third: "var(--third)",
        forth: "var(--forth)",
        fifth: "var(--fifth)",

        "text-primary": "var(--text-primary)",


        "status-primary": "var(--status-primary)",
        "status-secondary": "var(--status-secondary)",
        "status-third": "var(--status-third)",
        "status-forth": "var(--status-forth)",
        "status-fifth": "var(--status-fifth)",
        "status-sixth": "var(--status-sixth)",
        "status-seventh": "var(--status-seventh)",
      },
    },
  },
  plugins: [],
};
