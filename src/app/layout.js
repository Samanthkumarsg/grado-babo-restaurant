import "./globals.css";
import { Figtree, Playfair_Display } from '@next/font/google';
import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  title: "Grado Babo",
  description: "An italian vegan restaurant",
};


const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export { figtree, playfairDisplay };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={figtree.className}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
