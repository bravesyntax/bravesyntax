import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const OvoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepak Kumar - Frontend Developer | React, Next.js, Shopify Expert",
  description:
    "Experienced frontend developer specializing in React, Next.js, WordPress, and Shopify. Creating modern, responsive web applications and e-commerce solutions. Available for freelance projects.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Shopify Expert",
    "WordPress Developer",
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "E-commerce Development",
    "Freelance Developer",
    "Portfolio",
  ],
  authors: [{ name: "Deepak Kumar", url: "https://bravesyntax.vercel.app" }],
  creator: "Deepak Kumar",
  publisher: "Brave Syntax",
  metadataBase: new URL("https://bravesyntax.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bravesyntax.vercel.app",
    title: "Deepak Kumar - Frontend Developer | React, Next.js, Shopify Expert",
    description:
      "Experienced frontend developer specializing in React, Next.js, WordPress, and Shopify. Creating modern, responsive web applications and e-commerce solutions.",
    siteName: "Brave Syntax",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deepak Kumar - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Kumar - Frontend Developer | React, Next.js, Shopify Expert",
    description:
      "Experienced frontend developer specializing in React, Next.js, WordPress, and Shopify. Creating modern, responsive web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${OutfitFont.variable} ${OvoFont.variable} leading-6 antialiased dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
