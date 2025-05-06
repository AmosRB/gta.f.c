import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "אתר רספונסיבי חדש",
  description: "גרסה בלי Tailwind, עם גלילה ארוכה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <body>
        {children}
      </body>
    </html>
  );
}
