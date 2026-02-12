import { ExternalLink, Github, Folder } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    title: "AI-Powered Chatbot",
    description:
      "A conversational AI assistant built with transformer models, supporting multi-turn dialogue and context-aware responses.",
    tags: ["Python", "PyTorch", "FastAPI", "React"],
    github: "https://github.com/yourusername/chatbot",
    live: "",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack online store with product management, cart, payments, and real-time inventory tracking.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://myecommerce.example.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive single-page portfolio built with Next.js and Tailwind CSS, featuring dark mode and smooth navigation.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/yourusername/portfolio",
    live: "",
  },
  {
    title: "Distributed Task Scheduler",
    description:
      "A fault-tolerant distributed system for scheduling and executing tasks across multiple worker nodes.",
    tags: ["Go", "gRPC", "Redis", "Docker"],
    github: "https://github.com/yourusername/scheduler",
    live: "",
  },
  {
    title: "Image Classification Pipeline",
    description:
      "End-to-end ML pipeline for classifying medical images with data augmentation, training, and deployment.",
    tags: ["Python", "TensorFlow", "Docker", "GCP"],
    github: "https://github.com/yourusername/image-classifier",
    live: "",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Instant messaging platform with WebSocket-based real-time communication, user authentication, and file sharing.",
    tags: ["Node.js", "Socket.io", "React", "MongoDB"],
    github: "https://github.com/yourusername/chat-app",
    live: "",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 transition-colors relative overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Projects"
          subtitle="A selection of projects I've built and contributed to"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg dark:hover:shadow-zinc-900/50">
              <div className="flex items-center justify-between mb-4">
                <Folder
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      aria-label="GitHub">
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      aria-label="Live demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-200/60 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
