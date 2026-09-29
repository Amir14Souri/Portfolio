"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Folder, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../components/SectionHeading";
import { PROJECTS } from "@/app/portfolio";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const otherProjects = PROJECTS.filter((project) => !project.featured);

  const renderProject = (project: (typeof PROJECTS)[number]) => (
    <Card
      variant="active"
      key={project.title}
      className="lab-project group h-full border transition">
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
          <Folder className="min-h-5 min-w-5 max-h-5 max-w-5 text-cyan-500" aria-hidden="true" />
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="rounded-sm px-3 py-0.5 text-[11px] font-medium">
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
      id="projects"
      className="lab-section relative px-6 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Selected research, software, and coursework projects"
        />
        <div className="lab-project-grid grid gap-5 md:grid-cols-2">
          {featuredProjects.map(renderProject)}
          {showAll && otherProjects.map(renderProject)}
        </div>
        <Button
          type="button"
          variant="outline"
          className="mt-8 flex gap-2"
          aria-expanded={showAll}
          onClick={() => setShowAll((current) => !current)}>
          {showAll ? <ChevronUp className="h-4 w-4" aria-hidden="true" /> : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
          {showAll ? "Show less" : `More projects (${otherProjects.length})`}
        </Button>
      </div>
    </section>
  );
}
