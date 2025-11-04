import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Babymamatribemv - Premium Baby Items Store",
  description: "Your trusted source for premium baby items and essentials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-primary-light via-white to-primary-light">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
