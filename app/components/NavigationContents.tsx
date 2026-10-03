"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/app/portfolio";
import { useMounted } from "./useMounted";
import { useThemeTransition } from "./ThemeProvider";

/** Shared controls and menu rows for the hero and sticky navigation. */
export default function NavigationContents({ menuId }: { menuId: string }) {
  const { resolvedTheme } = useTheme();
  const toggleTheme = useThemeTransition();
  const mounted = useMounted();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [activeSection, setActiveSection] = useState("");
  const isDark = mounted ? resolvedTheme === "dark" : true;

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [mobileOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    const sections = ["hero", ...NAV_ITEMS.map(({ href }) => href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const activeLine = Math.max(96, window.innerHeight * 0.25);
      let active = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activeLine) active = section;
      }
      // The final section can be too short to reach the active line.
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        active = sections.at(-1) ?? active;
      }
      setActiveSection(active?.id ?? "");
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const links = NAV_ITEMS.map(({ label, href }) => (
    <a
      key={href}
      href={href}
      className={`lab-nav-link ${activeSection === href.slice(1) ? "lab-nav-active" : ""}`}
      aria-current={activeSection === href.slice(1) ? "location" : undefined}
      onClick={() => setMobileOpen(false)}>
      <span className="lab-nav-label">{label}</span>
    </a>
  ));

  return (
    <>
      <div className="lab-nav-inner mx-auto max-w-6xl">
        <a href="#hero" className="lab-brand" onClick={() => setMobileOpen(false)}>
          <span aria-hidden="true">[</span>{SITE.brand}<span aria-hidden="true">]</span>
        </a>
        <div className="hidden lg:flex items-center gap-1">{links}</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="lab-icon-button"
            aria-label="Toggle theme"
            onClick={toggleTheme}>
            {mounted && (isDark ? <Sun size={18} /> : <Moon size={18} />)}
          </button>
          <button
            type="button"
            className="lab-icon-button lg:hidden"
            ref={menuButton}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            onClick={() => setMobileOpen((open) => !open)}>
            <span className="lab-menu-strokes" aria-hidden="true"><span /><span /><span /></span>
          </button>
        </div>
      </div>
      <div id={menuId} hidden={!mobileOpen} className="lab-mobile-menu lg:hidden">
        {links}
      </div>
    </>
  );
}
