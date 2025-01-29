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
        light: "#FFF6F9",
        lightfill: "#FFF2F5",
        weak: "#D5D1D2",
        strong: "#330C1A",
        textWeak: "#765B64",
        strongText: "#330C1A",
        strongBrown: "#4F4043",
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('/images/BackgroundHero.svg')",
        cheers: "url('/images/cheers.svg')", // Define your hero background image
        // Define your hero background image
        heroRight: "url('/images/heroImage.png')",
      },
      animation: {
        'fade-bg': 'fadeBg 10s infinite alternate ease-in-out',
      },
      keyframes: {
        fadeBg: {
          '0%': { backgroundImage: "url('/images/plates.svg')", opacity: 1 },

          '100%': { backgroundImage: "url('/images/cheers.svg')", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
