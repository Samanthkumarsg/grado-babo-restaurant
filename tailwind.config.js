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
        primary: "#D03970",
        fill: "#F7DDE3",
        lightfill: "#FFF2F5",
        weak: "#D5D1D2",
        strong: "#330C1A",
        textWeak: "#765B64",
        strongText: "#330C1A",
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('/images/BackgroundHero.svg')",
        heroRight: "url('/images/heroImage.png')",
      }
    },
  },
  plugins: [],
};
