/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-color": "var(--bg-color)",
        "bg-raised": "var(--bg-raised)",
        "text-color": "var(--text-color)",
        "text-dim": "var(--text-dim)",
        "green-light": "var(--green-light)",
        "green-dark": "var(--green-dark)",
        blue: "var(--blue)",
        yellow: "var(--yellow)",
        pink: "var(--pink)",
        case: "var(--border-color)",
      },
      fontFamily: {
        heading: ["Courier Prime", "monospace"],
        body: ["Inter", "sans-serif"],
        accent: ["Fira Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
