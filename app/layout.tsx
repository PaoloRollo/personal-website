import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-svg-map/lib/index.css";
import "./globals.css";
import AppProviders from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "paolorollo.dev",
  description: "welcome to my website.",
  twitter: {
    title: "paolorollo.dev",
    description: "welcome to my website.",
    images: [
      {
        url: "https://paolorollo.dev/orbulo.png",
        width: 400,
        height: 400,
      },
    ],
  },
  openGraph: {
    title: "paolorollo.dev",
    description: "welcome to my website.",
    url: "https://paolorollo.dev",
    images: [
      {
        url: "https://paolorollo.dev/orbulo.png",
        width: 400,
        height: 400,
      },
    ],
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
