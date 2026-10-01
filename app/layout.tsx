import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amirhossein Souri",
  description:
    "Amirhossein Souri is a computer science and engineering student and research assistant at Sharif University of Technology, working on visual reasoning and machine learning.",
  keywords: [
    "Amirhossein Souri",
    "امیرحسین صوری",
    "Souri",
    "صوری",
    "Amir Souri",
    "امیر صوری",
    "souuri",
    "portfolio",
  ],
  authors: [{ name: "Amirhossein Souri" }],
  creator: "Amirhossein Souri",
  metadataBase: new URL("https://souuri.ir"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Amirhossein Souri",
    description: "Research and software projects in machine learning, visual reasoning, and engineering.",
    url: "https://souuri.ir",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-200`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
