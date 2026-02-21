import { ExternalLink, Folder, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../components/SectionHeading";
import { PROJECTS } from "@/app/portfolio";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 px-6">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="A set of products, websites, and coursework practical exercises"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Card
              variant="active"
              key={project.title}
              className="group h-full border transition">
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
                  <Folder className="min-h-5 min-w-5 max-h-5 max-w-5 text-cyan-500" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full border-dashed px-3 py-0.5 text-[11px] font-medium">
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
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs hover:text-foreground">
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
