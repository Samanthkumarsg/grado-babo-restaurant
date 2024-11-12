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
        fill: "#F0DEE3",
        weak: "#D5D1D2",
        strong: "#4F4043",
        weakText: "#251E20",
        strongText: "#180A0E"
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
