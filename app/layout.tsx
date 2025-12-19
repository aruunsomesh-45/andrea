import type { Metadata } from "next";

import { Inter, Outfit, Orbitron, Michroma } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrea | Web Developer & Strategic Partner",
  description: "I build fast, modern, and interactive websites for businesses & personal brands.",
  openGraph: {
    title: "Andrea | Web Developer & Strategic Partner",
    description: "I build fast, modern, and interactive websites for businesses & personal brands.",
    url: "https://andrea-dev.com", // Placeholder
    siteName: "Andrea Dev",
    images: [
      {
        url: "/about-showcase.png", // Using the image we just uploaded as preview
        width: 1200,
        height: 630,
        alt: "Andrea Digital Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${outfit.variable} ${orbitron.variable} ${michroma.variable} antialiased font-sans bg-black text-neutral-50 flex flex-col min-h-screen`}
      >
        <SmoothScroll />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>

  );
}
