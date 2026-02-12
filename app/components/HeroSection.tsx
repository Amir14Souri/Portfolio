"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ChevronDown,
  Sun,
  Moon,
  MapPin,
  FileText,
  Menu,
  X,
} from "lucide-react";

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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <section
      id="hero"
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
      }`}>
      {/* ── Tech grid background ── */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)]"
        } bg-[size:60px_60px]`}
      />

      {/* ── Floating circuit dots / lines (tech accents) ── */}
      {/* (kept clean — the grid + glows are enough for the hero) */}

      {/* ── Radial glows ── */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] ${
          isDark ? "bg-blue-500/15" : "bg-blue-400/20"
        }`}
      />
      <div
        className={`absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] ${
          isDark ? "bg-purple-500/10" : "bg-purple-400/15"
        }`}
      />

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

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Profile photo */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-sm" />
          <div
            className={`relative h-40 w-40 overflow-hidden rounded-full border-2 ${
              isDark ? "border-white/20" : "border-zinc-300"
            }`}>
            <Image
              src="/photo.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name & title */}
        <div className="space-y-3">
          <h1
            className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ${
              isDark ? "text-white" : "text-zinc-900"
            }`}>
            Amirhossein Souri
          </h1>
          <p
            className={`text-lg sm:text-xl font-medium ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}>
            BSc Student of Computer Engineering &bull; Sharif University of Technology
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
            <MapPin size={14} />
            <span>Tehran, Iran</span>
          </div>
        </div>

        {/* Tagline */}
        <p
          className={`max-w-lg leading-relaxed ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}>
          Passionate about advancing the frontiers of computer science through
          research and engineering. Currently focused on AI.
        </p>

        {/* Social / contact links */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {[
            {
              href: "mailto:amir@souuri.ir",
              icon: <Mail size={16} />,
              label: "Email",
            },
            {
              href: "https://github.com/Amir14Souri",
              icon: <Github size={16} />,
              label: "GitHub",
              external: true,
            },
            {
              href: "https://linkedin.com/in/amirhossein-souri",
              icon: <Linkedin size={16} />,
              label: "LinkedIn",
              external: true,
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium backdrop-blur-sm transition-colors ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-zinc-900/5 hover:bg-zinc-900/10 text-zinc-800"
              }`}>
              {link.icon}
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              isDark
                ? "bg-white text-zinc-900 hover:bg-zinc-200"
                : "bg-zinc-900 text-white hover:bg-zinc-800"
            }`}>
            <FileText size={16} />
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce transition-colors ${
          isDark
            ? "text-zinc-500 hover:text-white"
            : "text-zinc-400 hover:text-zinc-900"
        }`}
        aria-label="Scroll down">
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
