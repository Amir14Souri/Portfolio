"use client";

import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";

/* ── Data ── */

interface Skill {
  name: string;
  abbr: string; // short text badge (no emojis)
  color: string;
}

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  accent: string; // tailwind text color
  bgAccent: string; // tailwind bg for badge
  skills: Skill[];
  speed?: number; // seconds for one loop
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    badge: "Languages",
    accent: "text-blue-500",
    bgAccent: "bg-blue-500",
    speed: 35,
    skills: [
      { name: "Python", abbr: "Py", color: "#3776ab" },
      { name: "TypeScript", abbr: "TS", color: "#3178c6" },
      { name: "JavaScript", abbr: "JS", color: "#f7df1e" },
      { name: "Java", abbr: "Jv", color: "#ed8b00" },
      { name: "C++", abbr: "C++", color: "#00599c" },
      { name: "Go", abbr: "Go", color: "#00add8" },
      { name: "Rust", abbr: "Rs", color: "#dea584" },
      { name: "SQL", abbr: "SQL", color: "#336791" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    badge: "Frameworks",
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500",
    speed: 32,
    skills: [
      { name: "React", abbr: "Re", color: "#61dafb" },
      { name: "Next.js", abbr: "Nx", color: "#808080" },
      { name: "Node.js", abbr: "Nd", color: "#339933" },
      { name: "PyTorch", abbr: "PT", color: "#ee4c2c" },
      { name: "TensorFlow", abbr: "TF", color: "#ff6f00" },
      { name: "Express", abbr: "Ex", color: "#808080" },
      { name: "FastAPI", abbr: "FA", color: "#009688" },
      { name: "Tailwind", abbr: "TW", color: "#06b6d4" },
    ],
  },
  {
    id: "infra",
    title: "Databases & Cloud",
    badge: "Infrastructure",
    accent: "text-purple-500",
    bgAccent: "bg-purple-500",
    speed: 30,
    skills: [
      { name: "PostgreSQL", abbr: "PG", color: "#336791" },
      { name: "MongoDB", abbr: "MG", color: "#47a248" },
      { name: "Redis", abbr: "Rd", color: "#dc382d" },
      { name: "AWS", abbr: "AWS", color: "#ff9900" },
      { name: "Docker", abbr: "Dk", color: "#2496ed" },
      { name: "Kubernetes", abbr: "K8s", color: "#326ce5" },
      { name: "Firebase", abbr: "Fb", color: "#ffca28" },
      { name: "Supabase", abbr: "Sb", color: "#3ecf8e" },
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    badge: "Tools",
    accent: "text-orange-500",
    bgAccent: "bg-orange-500",
    speed: 28,
    skills: [
      { name: "Git", abbr: "Git", color: "#f05032" },
      { name: "GitHub", abbr: "GH", color: "#808080" },
      { name: "VS Code", abbr: "VS", color: "#007acc" },
      { name: "Figma", abbr: "Fg", color: "#f24e1e" },
      { name: "Linux", abbr: "Lx", color: "#fcc624" },
      { name: "Bash", abbr: "Sh", color: "#4eaa25" },
      { name: "Postman", abbr: "PM", color: "#ff6c37" },
      { name: "Webpack", abbr: "WP", color: "#8dd6f9" },
    ],
  },
];

/* ── Marquee row ── */

function SkillMarquee({ category }: { category: SkillCategory }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // duplicate items 3× for a seamless loop
  const items = [...category.skills, ...category.skills, ...category.skills];
  const duration = category.speed ?? 30;

  return (
    <Card className="bg-card/90">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-3">
          <Badge
            variant="glow"
            className={`${category.bgAccent} text-xs font-semibold uppercase tracking-[0.3em] text-white`}
          >
            {category.badge}
          </Badge>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>
          <div
            ref={trackRef}
            className="flex w-max gap-4"
            style={{
              animation: `marquee-scroll ${duration}s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}>
            {items.map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/80 px-5 py-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                <span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                  style={{ backgroundColor: skill.color }}>
                  {skill.abbr}
                </span>
                <span className="whitespace-nowrap text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/* ── Section ── */

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-zinc-50 via-blue-50/20 to-zinc-50 py-24 px-6 dark:from-zinc-950/30 dark:via-zinc-900/70 dark:to-zinc-950/30">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with daily"
        />

        {/* Marquee rows */}
        <div className="mt-4 space-y-10">
          {CATEGORIES.map((cat) => (
            <SkillMarquee key={cat.id} category={cat} />
          ))}
        </div>

        {/* Spoken languages */}
        <div className="mt-20 text-center">
          <Badge variant="glow" className="mb-8 text-xs uppercase tracking-[0.4em] text-white">
            Spoken Languages
          </Badge>
          <div className="flex flex-wrap justify-center gap-4">
            {["English — Fluent", "Persian (Farsi) — Native", "French — Intermediate"].map((lang) => (
              <Badge key={lang} variant="outline" className="rounded-full border-border/80 px-6 py-3 text-sm font-medium">
                {lang}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
