import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { yekanbakh } from "@/utils/fonts";
import Header from "@/app/_components/header/header";
import Footer from "@/app/_components/footer/footer";
import NextAuthProvider from "@/providers/NextAuthProvider";


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
            <body className="min-h-screen grid grid-rows-[80px_1fr_auto]">
                <NextAuthProvider>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </NextAuthProvider>
            </body>
        </html>
    );
}
