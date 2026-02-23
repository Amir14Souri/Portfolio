import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
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

const playpenSans = localFont({
  src: "../public/fonts/PlaypenSans-VariableFont_wght.ttf",
  variable: "--font-playpen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amirhossein Souri",
  description:
    "Official Portfolio of Amirhossein Souri — projects, skills, and professional experience.",
  keywords: [
    "Amirhossein Souri",
    "امیرحسین صوری",
    "Souri",
    "صوری",
    "Amir Souri",
    "امیر صوری",
    "souuri",
    "porfolio",
  ],
  authors: [{ name: "Amirhossein Souri" }],
  creator: "Amirhossein Souri",
  metadataBase: new URL("https://souuri.ir")
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
        className={`${geistSans.variable} ${geistMono.variable} ${playpenSans.variable} antialiased text-zinc-900 dark:text-white transition-colors duration-200`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
