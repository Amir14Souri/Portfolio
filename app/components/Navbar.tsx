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
  const [activeSection, setActiveSection] = useState("hero");
  const [pastHero, setPastHero] = useState(false);

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

  useEffect(() => {
    const aboutSection = document.querySelector<HTMLElement>("#about");
    if (!aboutSection) return;

    const handleScroll = () => {
      const { top } = aboutSection.getBoundingClientRect();
      setPastHero(top <= 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopLinks = (
    <NavigationMenu className="bg-transparent shadow-none">
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
  );

  const DesktopNavContent = () => (
    <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-4">
      <div className="flex flex-1 items-center gap-3">
        <a
          href="#hero"
          className="text-base font-semibold tracking-tight text-foreground">
          Portfolio
        </a>
      </div>
      <div className="flex flex-1 justify-center">{desktopLinks}</div>
      <div className="flex flex-1 items-center justify-end gap-2">
        <ModeToggle />
      </div>
    </div>
  );

  return (
    <>
      <nav className="hidden lg:block absolute inset-x-0 top-0 z-40 border-b border-transparent bg-gradient-to-b from-background/85 via-background/40 to-transparent">
        <DesktopNavContent />
      </nav>

      <nav
        className={cn(
          "hidden lg:block fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 transform-gpu",
          pastHero
            ? "opacity-100 translate-y-0 border-border/70 bg-background/95 shadow-sm backdrop-blur pointer-events-auto"
            : "opacity-0 -translate-y-3 border-transparent bg-transparent pointer-events-none",
        )}>
        <DesktopNavContent />
      </nav>

      <nav className="lg:hidden absolute inset-x-0 top-0 z-40 border-b border-transparent bg-gradient-to-b from-background/90 via-background/40 to-transparent">
        <div className="mx-auto flex w-full items-center justify-between gap-4 px-4 py-3">
          <a
            href="#hero"
            className="text-base font-semibold tracking-tight text-foreground">
            Portfolio
          </a>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
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
      </nav>

      <nav
        className={cn(
          "lg:hidden fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 transform-gpu",
          pastHero
            ? "border-border/70 bg-background/95 shadow-sm backdrop-blur"
            : "opacity-0 -translate-y-3 border-transparent bg-transparent pointer-events-none",
        )}>
        <div className="mx-auto flex w-full items-center justify-between gap-4 px-4 py-3">
          <a
            href="#hero"
            className="text-base font-semibold tracking-tight text-foreground">
            Portfolio
          </a>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
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
      </nav>
    </>
  );
}
