import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starter manikam",
  description: "starter za izradu sajta manikam",
  icons: {
    icon: "/manikam.png",
    apple: "/manikam.png",
  },
  keywords: ["", ""],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted bg-muted-foreground`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
