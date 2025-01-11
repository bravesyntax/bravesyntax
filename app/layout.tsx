import type { Metadata } from "next";

import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const OvoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Brave Syntax",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${OutfitFont.className} ${OvoFont.className} antialiased dark:text-white dark:bg-darkTheme leading-6`}>
        {children}
      </body>
    </html>
  );
}
