import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/ui/fonts";

import DaisyNavbar from "@/app/components/daisynavbar";

export const metadata: Metadata = {
  title: "Kino Newa",
  description: "Kino Newa - studyjne kino z wieloletnią tradycją. Kameralna atmosfera, ambitny repertuar, kino artystyczne i festiwalowe. Zielona Góra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <DaisyNavbar />
        <div className="pt-20 md:pt-24">{children}</div>
      </body>
    </html>
  );
}
