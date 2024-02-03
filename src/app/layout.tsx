import type { Metadata } from "next";
import "./globals.css";

import Social from "@/app/components/social";
import NavbarEvo from "@/app/components/navbarevo";

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
        <Social />
        {/*<LogoBox />*/}
        <NavbarEvo />
        {children}
      </body>
    </html>
  );
}
