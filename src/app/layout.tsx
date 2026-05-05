import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "ProCare | Trading, Contracting & Facility Services",
  description:
    "Pro Care Trading, Contracting & Facility Services W.L.L — construction, pest control, facility management, and more across Qatar.",
  keywords: "ProCare, Qatar, pest control, construction, facility management, contracting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
