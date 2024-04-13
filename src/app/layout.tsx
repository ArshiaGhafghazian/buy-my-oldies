import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { yekanbakh } from "@/utils/fonts";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "buy my oldies",
  description: "this is a test",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${yekanbakh.variable}`}>
      <body>{children}</body>
    </html>
  );
}
