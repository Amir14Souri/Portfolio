"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/app/portfolio";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
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

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${visible
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0 pointer-events-none"
        }`}>
      <div className="bg-white/60 dark:bg-black/60 backdrop-blur-xl border-b border-foreground/20">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
          <a
            href="#hero"
            className="text-2xl font-semibold italic tracking-tight text-foreground hover:text-muted-foreground transition-colors font-playpen">
            {SITE.brand}
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeSection === href.slice(1)
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
                  }`}>
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-muted-foreground hover:bg-accent transition-colors"
              aria-label="Toggle theme">
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full text-muted-foreground hover:bg-accent transition-colors"
              aria-label="Toggle menu">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === href.slice(1)
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
