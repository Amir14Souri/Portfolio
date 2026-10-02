"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDown, ExternalLink, Folder, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../components/SectionHeading";
import { PROJECTS } from "@/app/portfolio";
import { useReducedMotion } from "../components/useReducedMotion";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const disclosureRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const otherProjects = PROJECTS.filter((project) => !project.featured);

  useLayoutEffect(() => {
    const container = disclosureRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

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
        const section = sectionRef.current;
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

  const renderProject = (project: (typeof PROJECTS)[number], index: number) => (
    <Card
      data-reveal
      data-reveal-key={project.title}
      data-reveal-delay={Math.min(index, 2) * 60}
      variant="top"
      key={project.title}
      className="lab-project h-full">
      <CardContent className="flex h-full flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2 text-left">
            <h3 className="text-base font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
          <Folder className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" aria-hidden="true" />
        </div>
        <div className="lab-project-tags flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="rounded-sm px-3 py-0.5 text-xs font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex gap-3 text-muted-foreground">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs hover:text-foreground">
              <Github className="h-4 w-4" aria-hidden="true" />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs hover:text-foreground">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="lab-section lab-section-grid relative px-6 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Selected research, software, and coursework projects"
        />
        <div className="lab-project-grid grid gap-5 md:grid-cols-2">
          {featuredProjects.map(renderProject)}
        </div>
        <div
          ref={disclosureRef}
          id="additional-projects"
          data-project-disclosure
          className="lab-project-disclosure"
          hidden={collapsed}
          inert={!showAll}
          aria-hidden={!showAll}>
          {!collapsed && <div ref={contentRef} className="lab-project-more grid gap-5 md:grid-cols-2">
            {otherProjects.map(renderProject)}
          </div>}
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
          {showAll ? "Show less" : <>More projects <span className="lab-project-count">({otherProjects.length})</span></>}
        </Button>
      </div>
    </section>
  );
}
