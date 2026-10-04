import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../components/SectionHeading";
import ProjectDisclosure from "../components/ProjectDisclosure";
import { PROJECTS } from "@/app/portfolio";

const renderProject = (project: (typeof PROJECTS)[number], index: number) => (
  <Card
    data-reveal
    data-reveal-key={project.title}
    data-reveal-delay={Math.min(index, 2) * 60}
    variant="top"
    key={project.title}
    className="lab-project h-full">
    <CardContent className="flex h-full flex-col gap-4 p-5">
      <div className="min-w-0 space-y-2 text-left">
        <div className="flex flex-wrap-reverse items-start justify-between gap-x-3 gap-y-2">
          <h3 className="min-w-0 flex-1 basis-64 text-base font-semibold text-foreground">
            {project.title}
          </h3>
          {project.period && (
            <Badge variant="outline" className="lab-date ml-auto shrink-0 text-xs">
              {project.period}
            </Badge>
          )}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
      <div className="lab-project-footer mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <div className="lab-project-tags flex min-w-0 flex-1 basis-48 flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="rounded-sm px-3 py-0.5 text-xs font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="lab-project-links flex shrink-0 items-center gap-3 text-muted-foreground">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="lab-action-link">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="lab-action-link">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live
            </a>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function ProjectsSection() {
  // Follow the array order; reveal the leading featured entries initially.
  const firstAdditionalIndex = PROJECTS.findIndex((project) => !project.featured);
  const splitIndex = firstAdditionalIndex === -1 ? PROJECTS.length : firstAdditionalIndex;
  const initialProjects = PROJECTS.slice(0, splitIndex);
  const otherProjects = PROJECTS.slice(splitIndex);

  return (
    <section
      id="projects"
      className="lab-section lab-section-grid relative px-6 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Selected research, software, and coursework projects"
        />
        <div className="lab-project-grid grid gap-5 md:grid-cols-2">
          {initialProjects.map(renderProject)}
        </div>
        {otherProjects.length > 0 && (
          <ProjectDisclosure count={otherProjects.length}>
            {otherProjects.map(renderProject)}
          </ProjectDisclosure>
        )}
      </div>
    </section>
  );
}
