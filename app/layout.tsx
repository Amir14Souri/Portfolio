import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./components/ThemeProvider";
import { SITE } from "./portfolio";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Geist.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMono.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: SITE.fullName,
  description:
    "Amirhossein Souri is a computer science and engineering student and research assistant at Sharif University of Technology, working on visual reasoning and machine learning.",
  keywords: [SITE.fullName, ...SITE.aliases, "portfolio"],
  authors: [{ name: SITE.fullName }],
  creator: SITE.fullName,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.fullName,
    description: "Research and software projects in machine learning, visual reasoning, and engineering.",
    url: SITE.url,
    type: "website",
    images: [{
      url: SITE.photoSrc,
      width: 826,
      height: 826,
      alt: `Portrait of ${SITE.fullName}`,
    }],
  },
  twitter: {
    card: "summary",
    title: SITE.fullName,
    description: "Research and software projects in machine learning, visual reasoning, and engineering.",
    images: [{ url: SITE.photoSrc, alt: `Portrait of ${SITE.fullName}` }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
