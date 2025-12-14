import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigatebar from "@/components/Navigatebar";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import About from "@/components/About";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
        <Navigatebar />
        <Intro />
        <About />
        <Footer/>
      </body>
    </html>
  );
}
