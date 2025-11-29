import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Dr. Malot Dental Clinic",
  description: "Expert dental care with a personal touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-background text-foreground min-h-screen flex flex-col font-sans`}
      >
        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
