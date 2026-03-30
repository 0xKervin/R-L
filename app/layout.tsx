import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R&L Servicios Electricos",
  description:
    "R&L Servicios Electricos - Soluciones electricas profesionales para hogares y negocios. Seguridad, calidad y confiabilidad en cada proyecto.",
  icons: {
    icon: [
      {
        url: "/faviconblack.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/faviconwhite.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/faviconwhite.png",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
