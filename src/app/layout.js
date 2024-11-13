import "./globals.css";

export const metadata = {
  title: "Grado Babo",
  description: "An italian vegan restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
