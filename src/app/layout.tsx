import type { Metadata } from "next";
import { Nunito, Raleway } from "next/font/google";
import { Header, Footer } from "@/components";
import "./globals.css";

const nunitoSans = Nunito({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});

const ralewaySans = Raleway({
    variable: "--font-raleway-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Muhiddinov Ismoil's Blog",
    description:
        "Welcome to my personal blog and portfolio — I write about web development, share projects, and explore new tech.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${nunitoSans.variable} ${ralewaySans.variable} antialiased`}
            >
                <div className="flex flex-col min-h-screen justify-between bg-[#0c0c0d]">
                    <div>
                        <Header />
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
