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
    label: "Role",
    value: "Computer Engineering @ Sharif UT",
  },
  {
    label: "Focus",
    value: "Robust ML • Research Engineering",
  },
  {
    label: "Interests",
    value: "AI, infra, distributed systems",
  },
];

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Service", href: "#service" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
      <div
        className={`absolute inset-0 opacity-100 ${
          isDark
            ? "bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)]"
        } bg-[size:60px_60px]`}>
        <div
          className={`absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] ${
            isDark ? "bg-blue-500/30" : "bg-blue-400/40"
          }`}
        />
        <div
          className={`absolute right-1/4 top-1/4 h-[320px] w-[320px] rounded-full blur-[120px] ${
            isDark ? "bg-purple-500/25" : "bg-purple-400/30"
          }`}
        />
      </div>

      {/* ── Hero navbar (transparent overlay) ── */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className={`text-lg font-semibold tracking-tight transition-colors ${
              isDark
                ? "text-white hover:text-zinc-300"
                : "text-zinc-900 hover:text-zinc-600"
            }`}>
            Portfolio
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isDark
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
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? "text-zinc-400 hover:text-white hover:bg-white/10"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-900/5"
              }`}
              aria-label="Toggle theme">
              {mounted && (isDark ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isDark
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
            className={`lg:hidden border-t mx-4 rounded-b-xl backdrop-blur-xl ${
              isDark
                ? "bg-zinc-900/90 border-white/10"
                : "bg-white/90 border-zinc-200"
            }`}>
            <div className="flex flex-col px-4 py-3 gap-1">
              {NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isDark
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
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-md" />
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/20">
            <Image
              src="/photo.jpg"
              alt="Portrait of Amirhossein Souri"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Amirhossein Souri
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            BSc Computer Engineering student at Sharif University of Technology. I
            craft human-centric research tools, ML systems, and developer
            platforms with a calm aesthetic and production rigor.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Tehran, Iran · Open for research collaborations
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="outline" size="sm" className="border-dashed">
            <a href="/resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" /> Download résumé
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <Button
              key={label}
              asChild
              size="icon"
              variant="ghost"
              className="border border-border/60 bg-background/60">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                <Icon className="h-4 w-4" />
                <span className="sr-only">{label}</span>
              </a>
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
          {QUICK_FACTS.map(({ label, value }) => (
            <Badge key={label} variant="outline" className="rounded-full px-4 py-1 font-medium">
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
        variant="ghost"
        size="sm"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground">
        <a href="#about" className="flex items-center gap-2">
          Scroll
          <ArrowDown className="h-4 w-4" />
        </a>
      </Button>
    </section>
  );
}
