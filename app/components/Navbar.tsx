"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/app/portfolio";
import { useMounted } from "./useMounted";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav
      aria-label="Section navigation"
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${visible
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0 pointer-events-none"
        }`}>
      <div className="lab-nav">
        <div className="lab-nav-inner mx-auto max-w-6xl">
          <a
            href="#hero"
            className="lab-brand">
            <span aria-hidden="true">[</span>{SITE.brand}<span aria-hidden="true">]</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`lab-nav-link ${activeSection === href.slice(1)
                  ? "lab-nav-active"
                  : ""
                  }`}>
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              type="button"
              className="lab-icon-button"
              aria-label="Toggle theme">
              {resolvedTheme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              type="button"
              className="lab-icon-button lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="sticky-mobile-menu">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div id="sticky-mobile-menu" hidden={!mobileOpen} className="lab-mobile-menu lg:hidden">
          <div className="flex flex-col px-6 py-4 gap-1">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === href.slice(1)
                    ? "lab-nav-active"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
