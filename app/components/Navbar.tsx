"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { ModeToggle } from "./ModeToggle";

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

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.65);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    NAV_ITEMS.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0",
      )}>
      <div className="pointer-events-auto mt-6 w-full max-w-6xl rounded-3xl border border-border/60 bg-background/70 px-6 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#hero"
            className="text-base font-semibold tracking-tight text-foreground">
            Portfolio
          </a>

          <div className="hidden items-center gap-4 lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_ITEMS.map(({ label, href }) => (
                  <NavigationMenuItem key={href}>
                    <NavigationMenuLink asChild>
                      <a
                        href={href}
                        className={cn(
                          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                          activeSection === href.slice(1)
                            ? "bg-foreground text-background"
                            : "text-muted-foreground hover:text-foreground",
                        )}>
                        {label}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button asChild variant="glow" size="sm">
              <a href="#contact">Let&apos;s talk</a>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="gap-8">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2">
                  {NAV_ITEMS.map(({ label, href }) => (
                    <SheetClose key={href} asChild>
                      <Button
                        asChild
                        variant={
                          activeSection === href.slice(1) ? "glow" : "outline"
                        }
                        className="justify-start">
                        <a href={href}>{label}</a>
                      </Button>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
