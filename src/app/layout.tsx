import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";

import Social from "@/app/components/social";
import LogoBox from "@/app/components/logo";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "Kino Newa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className} bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
