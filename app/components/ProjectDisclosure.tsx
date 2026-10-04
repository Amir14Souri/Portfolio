"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "./useReducedMotion";

/** Cards remain in the exported HTML; only the disclosure needs browser state. */
export default function ProjectDisclosure({ children, count }: { children: ReactNode; count: number }) {
  const [showAll, setShowAll] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const disclosureRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const container = disclosureRef.current;
    const content = contentRef.current;
    if (!container || !content || (!showAll && container.hidden)) return;

    let animation: Animation | undefined;
    let scrollFrame = 0;
    let targetHeight = -1;
    let disposed = false;

    const freeze = () => {
      const height = container.getBoundingClientRect().height;
      const opacity = getComputedStyle(container).opacity;
      animation?.cancel();
      container.style.height = `${height}px`;
      container.style.opacity = opacity;
      return { height, opacity };
    };
    const finish = () => {
      container.style.height = showAll ? "auto" : "0px";
      container.style.opacity = showAll ? "1" : "0";
      if (showAll) return;
      setCollapsed(true);
      scrollFrame = requestAnimationFrame(() => {
        const section = buttonRef.current?.closest("section");
        if (!section) return;
        buttonRef.current?.focus({ preventScroll: true });
        window.scrollTo({
          top: window.scrollY + section.getBoundingClientRect().bottom - window.innerHeight + 24,
          behavior: reducedMotion ? "instant" : "smooth",
        });
      });
    };
    const transition = () => {
      const nextHeight = showAll ? content.getBoundingClientRect().height : 0;
      if (nextHeight === targetHeight) return;
      targetHeight = nextHeight;
      const from = freeze();
      container.style.height = `${nextHeight}px`;
      container.style.opacity = showAll ? "1" : "0";
      if (reducedMotion || !container.animate) {
        finish();
        return;
      }
      const current = container.animate([
        { height: `${from.height}px`, opacity: from.opacity },
        { height: `${nextHeight}px`, opacity: showAll ? 1 : 0 },
      ], { duration: 280, easing: "cubic-bezier(.2, .65, .3, 1)" });
      animation = current;
      void current.finished.then(() => {
        if (!disposed && animation === current) {
          animation = undefined;
          finish();
        }
      }).catch(() => { /* A new toggle or size change cancels this transition. */ });
    };

    transition();
    const observer = new ResizeObserver(() => {
      if (showAll) transition();
    });
    observer.observe(content);
    return () => {
      disposed = true;
      cancelAnimationFrame(scrollFrame);
      observer.disconnect();
      freeze();
    };
  }, [showAll, reducedMotion]);

  const toggleProjects = () => {
    if (!showAll) setCollapsed(false);
    setShowAll(!showAll);
    buttonRef.current?.focus({ preventScroll: true });
  };

  return (
    <>
      <div
        ref={disclosureRef}
        id="additional-projects"
        data-project-disclosure
        className="lab-project-disclosure"
        hidden={collapsed}
        inert={!showAll}
        aria-hidden={!showAll}>
        <div ref={contentRef} className="lab-project-more grid gap-5 md:grid-cols-2">
          {children}
        </div>
      </div>
      <Button
        ref={buttonRef}
        type="button"
        variant="outline"
        className="lab-project-toggle mt-8 flex gap-2"
        aria-expanded={showAll}
        aria-controls="additional-projects"
        onClick={toggleProjects}>
        <ChevronDown className="lab-project-chevron h-4 w-4" aria-hidden="true" />
        {showAll ? "Show less" : <>More projects <span className="lab-project-count">({count})</span></>}
      </Button>
    </>
  );
}
