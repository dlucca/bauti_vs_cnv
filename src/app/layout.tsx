import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "BAUTI VS. LA CNV",
  description: "Que la CNV no te rompa el orto."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
