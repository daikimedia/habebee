import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/comman/navbar";
import Footer from "@/components/comman/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Restaurant in Cyberjaya | Habebee Lounge",
  description: "Discover the best dining experience at Habebee Lounge in Cyberjaya. Enjoy Western food, cozy ambiance, and exceptional service. Visit us today!",
  keywords: ["Best restaurant in Cyberjaya", "Western food Cyberjaya", "Habebee Lounge"],
  openGraph: {
    title: "Best Restaurant in Cyberjaya | Habebee Lounge",
    description: "Discover the best dining experience at Habebee Lounge in Cyberjaya.",
    type: "website",
    url: "https://yourwebsite.com/cyberjaya-restaurant",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Habebee Lounge Cyberjaya",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
