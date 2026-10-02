"use client";

import { useEffect, useState } from "react";
import NavigationContents from "./NavigationContents";
import { useMounted } from "./useMounted";

export default function Navbar() {
  const mounted = useMounted();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      aria-label="Section navigation"
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed top-0 left-0 right-0 z-50 transition-[transform,opacity] duration-200 ${visible
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0 pointer-events-none"
      }`}>
      <div className="lab-nav">
        <NavigationContents menuId="sticky-mobile-menu" />
      </div>
    </nav>
  );
}
