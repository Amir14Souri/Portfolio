import { ExternalLink, Folder, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    title: "ML Models Collection",
    description:
      "Collection of some Machine Learning models, including explanation, formulas, and examples in jupyter notebooks. Both Implementation and Scikit-Learn usage are provided.",
    tags: ["Python", "Jupyter", "Scikit-Learn"],
    github: "https://github.com/ML-Exercises/",
    live: "",
  },
  {
    title: "AI Practical Exercises",
    description:
      "Practical assignments of Artificial Intelligence course, containing implementations of various AI algorithms.",
    tags: ["Python", "Jupyter", "NumPy", "PyTorch"],
    github: "https://github.com/Amir14Souri/AI-Exercises",
    live: "",
  },
  {
    title: "AI Security Exercises",
    description:
      "Practical tasks completed for research project applications at the RIML lab, containing basic attacks to unlearned models.",
    tags: ["Python", "Jupyter", "PyTorch"],
    github: "https://github.com/Amir14Souri/LabTask",
    live: "",
  },
  {
    title: "Vim (Clone)",
    description:
      "Project of Fundamentals of Programming course, implementing most of the important commands of Vim editor.",
    tags: ["C", "Vim", "Ncurses"],
    github: "https://github.com/Amir14Souri/Vim-simulator",
    live: "",
  },
  {
    title: "Stronghold: Crusader (Clone)",
    description:
      "Project of Advanced Programming course, implementing a real-time simple version of the game with some extra functionalities.",
    tags: ["Java", "JavaFX", "Git"],
    github: "https://github.com/Amir14Souri/project-group-09",
    live: "",
  },
  {
    title: "aa Game",
    description:
      "Practical assignment of Advanced Programming course, implementing a version of aa game.",
    tags: ["Java", "JavaFX"],
    github: "https://github.com/Amir14Souri/AA",
    live: "",
  },
  {
    title: "Todo List",
    description:
      "A simple todo list with persistent local storage",
    tags: ["Python", "Flask", "HTML", "CSS"],
    github: "https://github.com/Amir14Souri/Todo-List",
    live: "",
  },
  {
    title: "Hardwar Website",
    description:
      "",
    tags: ["Python", "Django", "JavaScript", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/Amir14Souri/#",
    live: "https://hardwar-sharif.ir",
  },
  {
    title: "BugsBuzzy Website",
    description:
      "",
    tags: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com/Amir14Souri/#",
    live: "https://bugsbuzzy.ir",
  },
  {
    title: "Portfolio Website",
    description:
      "",
    tags: ["JavaScript", "Next.js"],
    github: "https://github.com/Amir14Souri/#",
    live: "https://amir.souuri.ir",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 px-6">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="A curated sample of products, infrastructure efforts, and research tooling"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="group h-full border border-border/60 bg-background/90 shadow-none transition hover:-translate-y-1 hover:border-border/40 hover:bg-background">
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
                  <Folder className="min-h-5 min-w-5 max-h-5 max-w-5 text-blue-500" />
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
