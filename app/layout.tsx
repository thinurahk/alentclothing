import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alentclothing.com'),
  title: {
    default: "Alent Clothing | Premium Textile & Apparel Manufacturer",
    template: "%s | Alent Clothing"
  },
  description: "Alent Clothing is a leading integrated textile and apparel manufacturer in Sri Lanka, specializing in premium polos, denim, and high-performance activewear.",
  keywords: ["Alent Clothing", "Textile Manufacturer Sri Lanka", "Apparel Manufacturing", "Premium Polos", "Denim Production", "Sustainable Fashion Sri Lanka", "Garment Manufacturing"],
  authors: [{ name: "Alent Clothing" }],
  creator: "Alent Clothing",
  publisher: "Alent Clothing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Alent Clothing | Premium Textile & Apparel Manufacturer",
    description: "Discover Alent Clothing, one of Sri Lanka's most integrated fabric-to-fashion businesses. Leading innovation in sustainable apparel and textile manufacturing.",
    url: 'https://alentclothing.com',
    siteName: 'Alent Clothing',
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alent Clothing | Premium Textile & Apparel Manufacturer",
    description: "Leading integrated textile and apparel manufacturer in Sri Lanka. Innovation, sustainability, and excellence in fashion.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
