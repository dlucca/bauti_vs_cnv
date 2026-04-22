import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Examenbau CNV",
  description: "Simulador mobile-first para preparar el examen de idoneidad CNV con diagnostico por areas."
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
