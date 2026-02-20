"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import {
  ArrowDown,

  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import NeuralNetworkBg from "@/app/components/NeuralNetworkBg";

const SOCIAL_LINKS = [
  {
    label: "Email",
    href: "mailto:amir@souuri.ir",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/Amir14Souri",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/amirhossein-souri",
    icon: Linkedin,
  },
];

const QUICK_FACTS = [
  {
    label: "Major",
    value: "B.Sc • Computer Engineering",
  },
  {
    label: "University",
    value: "Sharif University of Technology",
  },
  {
    label: "Focus",
    value: "AI & ML • Software Development • Research",
  },
];

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Service", href: "#service" },
  { label: "Contact", href: "#contact" },
];

export default function HeroSection() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-85% to-cyan-600/20 dark:to-cyan-500/20"></div>
      {/* 2D Neural Network animated background */}
      <NeuralNetworkBg />

      {/* ── Hero navbar (transparent overlay) ── */}
      <nav className="absolute top-0 left-0 right-0 z-20 border-b-1 border-zinc-950/10 dark:border-zinc-50/10">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
            <a
              href="#hero"
            className={`tracking-tight transition-colors font-playpen text-2xl font-semibold italic ${isDark
                ? "text-white hover:text-zinc-300"
                : "text-zinc-900 hover:text-zinc-600"
              }`}>
              Souri
            </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${isDark
                  ? "text-zinc-400 hover:text-white hover:bg-white/10"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-900/5"
                  }`}>
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`p-2 rounded-full transition-colors ${isDark
                ? "text-zinc-400 hover:text-white hover:bg-white/10"
                : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-900/5"
                }`}
              aria-label="Toggle theme">
              {mounted && (isDark ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${isDark
                ? "text-zinc-400 hover:text-white hover:bg-white/10"
                : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-900/5"
                }`}
              aria-label="Toggle menu">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <div
            className={`lg:hidden border-t mx-4 rounded-b-xl backdrop-blur-xl ${isDark
              ? "bg-zinc-900/90 border-white/10"
              : "bg-white/90 border-zinc-200"
              }`}>
            <div className="flex flex-col px-4 py-3 gap-1">
              {NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isDark
                    ? "text-zinc-400 hover:text-white hover:bg-white/10"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-900/5"
                    }`}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 text-center">
        <div className="relative">
          <div className="absolute -inset-0.75 rounded-full bg-cyan-700/60 dark:bg-cyan-500/60 blur-xs" />
          <div className="relative h-48 w-48 overflow-hidden rounded-full border border-white/20">
            <Image
              src="/photo.jpg"
              alt="Amirhossein Souri"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Amirhossein Souri
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Tehran, Iran
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <Button
              key={label}
              asChild
              size="sm"
              variant="outline">
              <a
                className="flex gap-2"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </a>
            </Button>
          ))}
          <Button asChild variant="default" size="sm">
            <a href="/resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
          {QUICK_FACTS.map(({ label, value }) => (
            <Badge key={label} variant="outline" className="rounded-full px-4 py-1 font-medium bg-white/30 dark:bg-black/30">
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground/70">
                {label}
              </span>
              <span className="ml-2 text-foreground/80">{value}</span>
            </Badge>
          ))}
        </div>
      </div>

      <Button
        asChild
        variant="simple"
        size="icon"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <a href="#about" className="flex items-center gap-2">
          <ArrowDown className="h-6 w-6" />
        </a>
      </Button>
    </section>
  );
}
