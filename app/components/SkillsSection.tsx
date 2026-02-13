import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    badge: "Languages",
    description: "Strong foundations for research, data, and systems projects.",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "Go", "Rust", "SQL"],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    badge: "Frameworks",
    description: "Product-ready UI stacks and deep learning ecosystems.",
    skills: ["React", "Next.js", "Node.js", "PyTorch", "TensorFlow", "Express", "FastAPI", "Tailwind"],
  },
  {
    id: "infra",
    title: "Databases & Cloud",
    badge: "Infrastructure",
    description: "Cloud workflow, orchestration, and modern persistence layers.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "Firebase", "Supabase"],
  },
  {
    id: "tools",
    title: "Development Tools",
    badge: "Tooling",
    description: "Daily instruments for collaboration, prototyping, and delivery.",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Linux", "Bash", "Postman", "Webpack"],
  },
];

const SPOKEN_LANGUAGES = [
  "English — Fluent",
  "Persian (Farsi) — Native",
  "French — Intermediate",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-background py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A concise readout of the stacks and tools I rely on"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {CATEGORIES.map((category) => (
            <Card
              key={category.id}
              className="border border-border/60 bg-card/70 shadow-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="outline" className="rounded-full border-border/80 px-3 text-xs uppercase tracking-[0.25em]">
                    {category.badge}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {category.skills.length} tools
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/70 bg-background/80 px-3 py-1 text-sm text-foreground/90">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 border-t border-border/40 pt-10 text-center">
          <Badge
            variant="outline"
            className="mb-5 rounded-full border-border/80 px-4 py-1 text-xs uppercase tracking-[0.35em]">
            Spoken Languages
          </Badge>
          <div className="flex flex-wrap justify-center gap-3">
            {SPOKEN_LANGUAGES.map((language) => (
              <span
                key={language}
                className="rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
