import { ExternalLink, Folder, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    title: "AI-Powered Chatbot",
    description:
      "Conversational assistant built on transformer stacks with retrieval grounding and adaptive memory.",
    tags: ["Python", "PyTorch", "FastAPI", "React"],
    github: "https://github.com/yourusername/chatbot",
    live: "",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Composable storefront with product operations, Stripe payments, and live inventory telemetry.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://myecommerce.example.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Polished single-page portfolio with shadcn UI, scroll-linked navigation, and GSAP flourishes.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/yourusername/portfolio",
    live: "",
  },
  {
    title: "Distributed Task Scheduler",
    description:
      "Fault-tolerant orchestrator for scheduling compute-heavy jobs across Kubernetes clusters.",
    tags: ["Go", "gRPC", "Redis", "Docker"],
    github: "https://github.com/yourusername/scheduler",
    live: "",
  },
  {
    title: "Image Classification Pipeline",
    description:
      "End-to-end ML workflow for medical imaging with automated augmentation and monitoring.",
    tags: ["Python", "TensorFlow", "Docker", "GCP"],
    github: "https://github.com/yourusername/image-classifier",
    live: "",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Realtime collaboration layer with WebSocket transport, presence, and attachment streaming.",
    tags: ["Node.js", "Socket.io", "React", "MongoDB"],
    github: "https://github.com/yourusername/chat-app",
    live: "",
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
                    <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                      Case Study
                    </p>
                    <h3 className="text-base font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <Folder className="h-6 w-6 text-blue-500" />
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
