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
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme ? resolvedTheme === "dark" : true;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)]"
        } bg-[size:60px_60px]`}>
        <div
          className={`absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] ${
            isDark ? "bg-blue-500/20" : "bg-blue-400/30"
          }`}
        />
        <div
          className={`absolute right-1/4 top-1/4 h-[320px] w-[320px] rounded-full blur-[120px] ${
            isDark ? "bg-purple-500/20" : "bg-purple-400/25"
          }`}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 text-center">
        <Badge variant="muted" className="tracking-[0.35em] text-[11px]">
          NEXT.JS • RESEARCH PORTFOLIO
        </Badge>
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
          <Button asChild variant="glow" size="sm">
            <a href="/resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" /> Download résumé
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href="#contact">Contact</a>
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
