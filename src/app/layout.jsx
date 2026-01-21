// src/app/layout.jsx
import "../styles/globals.css";

export const metadata = {
  title: "Herencia Pura",
  description: "Sebum para la piel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
