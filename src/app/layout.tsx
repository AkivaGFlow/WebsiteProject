import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FlowHealth",
  description: "AI receptionist for medical practices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <NavBar />
        <div className="pt-[64px] pb-[56px] md:pb-0">{children}</div>
        <MobileBottomBar />
      </body>
    </html>
  );
}
