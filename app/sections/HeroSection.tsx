"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { ArrowDown, FileText, MapPin, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useMounted } from "@/app/components/useMounted";
import { HERO_QUICK_FACTS, HERO_SOCIAL_LINKS, NAV_ITEMS, SITE } from "@/app/portfolio";

export default function HeroSection() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = mounted ? resolvedTheme === "dark" : true;

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <section id="hero" className="lab-hero relative px-6">
      <nav className="lab-nav lab-hero-nav" aria-label="Main navigation">
        <div className="lab-nav-inner mx-auto max-w-6xl">
          <a href="#hero" className="lab-brand"><span aria-hidden="true">[</span>{SITE.brand}<span aria-hidden="true">]</span></a>
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, href }) => <a key={href} href={href} className="lab-nav-link">{label}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setTheme(isDark ? "light" : "dark")} type="button" className="lab-icon-button" aria-label="Toggle theme">
              {mounted && (isDark ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} type="button" className="lab-icon-button lg:hidden" aria-label="Toggle menu" aria-expanded={mobileOpen} aria-controls="hero-mobile-menu">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <div id="hero-mobile-menu" hidden={!mobileOpen} className="lab-mobile-menu lg:hidden">
          {NAV_ITEMS.map(({ label, href }) => <a key={href} href={href} onClick={() => setMobileOpen(false)} className="lab-nav-link">{label}</a>)}
        </div>
      </nav>

      <div className="lab-hero-content mx-auto max-w-6xl">
        <div className="lab-hero-copy">
          <div className="lab-hero-location"><span className="lab-signal" aria-hidden="true" /><MapPin size={14} aria-hidden="true" />{SITE.location}</div>
          <h1>{SITE.fullName}</h1>
          <p className="lab-hero-description">Research assistant studying visual reasoning in vision-language models, with broader interests across machine learning and intelligent systems.</p>
          <div className="lab-hero-actions flex flex-wrap gap-3">
            {HERO_SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <Button key={label} asChild variant="outline" size="sm">
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}><Icon className="h-4 w-4" /><span>{label}</span></a>
              </Button>
            ))}
            <Button asChild size="sm"><a href={SITE.resumeSrc} target="_blank" rel="noopener noreferrer"><FileText className="h-4 w-4" />Resume</a></Button>
          </div>
        </div>

        <div className="lab-profile-panel">
          <svg className="lab-diagram" viewBox="0 0 480 480" fill="none" aria-hidden="true">
            <defs>
              <pattern id="lab-hero-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" stroke="currentColor" strokeWidth=".6" /></pattern>
              <radialGradient id="lab-grid-fade" r="70%">
                <stop offset="65%" stopColor="white" />
                <stop offset="100%" stopColor="black" />
              </radialGradient>
              <mask id="lab-grid-mask"><rect width="480" height="480" fill="url(#lab-grid-fade)" /></mask>
            </defs>
            <rect width="480" height="480" fill="url(#lab-hero-grid)" opacity=".28" mask="url(#lab-grid-mask)" />
            <circle cx="240" cy="240" r="192" stroke="currentColor" opacity=".4" />
            <circle cx="240" cy="240" r="155" stroke="currentColor" strokeDasharray="2 9" opacity=".55" />
            <path d="M24 120H100L160 180M456 360H382L322 300M120 456V382L180 322M360 24V100L300 160" stroke="currentColor" opacity=".65" />
            <path d="M24 240H96M384 240H456M240 24V96M240 384V456" stroke="currentColor" opacity=".35" />
            {[ [48,120], [432,360], [120,432], [360,48] ].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="currentColor" />)}
            <path d="M85 85H105M85 85V105M395 85H375M395 85V105M85 395H105M85 395V375M395 395H375M395 395V375" stroke="currentColor" />
          </svg>
          <div className="lab-photo-frame"><Image src={SITE.photoSrc} alt={SITE.fullName} fill className="object-cover" priority sizes="(max-width: 767px) 180px, 230px" /></div>
          <div className="lab-profile-ruler" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        </div>
      </div>

      <div className="lab-hero-bottom mx-auto max-w-6xl">
        <div className="lab-quick-facts">
          {HERO_QUICK_FACTS.map(({ label, value }) => <div key={label} className="lab-quick-fact"><span>{label}</span><p>{value}</p></div>)}
        </div>
        <a href="#about" className="lab-scroll-link" aria-label="Go to About section"><ArrowDown size={19} /></a>
      </div>
    </section>
  );
}
