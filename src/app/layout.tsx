import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SaleBanner from "@/components/SaleBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WEARhouse — Good Pieces Don't Last Long",
  description: "Fashion-forward pieces for the girl who knows what she wants. Shop WEARhouse at Kinoo Square, Port Louis, Mauritius.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-brand-offwhite text-brand-near-black">
        <Navbar />
        <SaleBanner />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
