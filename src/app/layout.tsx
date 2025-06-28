import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ClientScripts from "@/components/ClientScripts";
import Footer from "@/components/Footer";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Webify Nebraska - Modern Web Design Solutions",
  description:
    "We create stunning websites to grow your business in Nebraska and beyond.",
  keywords:
    "web design, web development, SEO, Nebraska, Lincoln, conversion optimization",
  authors: [{ name: "Webify Nebraska" }],
  openGraph: {
    title: "Webify Nebraska - Your Web Dev Agency",
    description:
      "We create stunning websites to grow your business in Nebraska and beyond.",
    url: "https://webifynebraska.com",
    siteName: "Webify Nebraska",
    images: [
      {
        url: "/assets/logowebify4.png",
        width: 1200,
        height: 630,
        alt: "Webify Nebraska",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webify Nebraska - Modern Web Design Solutions",
    description:
      "We create stunning websites to grow your business in Nebraska and beyond.",
    images: ["/assets/logowebify4.png"],
  },
  icons: {
    icon: "/assets/logowebify4.png",
    shortcut: "/assets/logowebify4.png",
    apple: "/assets/logowebify4.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q1N40BNKPF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q1N40BNKPF');
          `}
        </Script>

        <Navigation />
        <ClientScripts />
        {children}
        <Footer />
      </body>
    </html>
  );
}
