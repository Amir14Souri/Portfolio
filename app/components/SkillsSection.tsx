"use client";

import { useRef, useState } from "react";
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
    <div className="space-y-4">
      {/* Badge */}
      <div className="flex items-center gap-3 px-1">
        <span
          className={`${category.bgAccent} text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full`}>
          {category.badge}
        </span>
        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Marquee track */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
        <div
          ref={trackRef}
          className="flex gap-4 w-max"
          style={{
            animation: `marquee-scroll ${duration}s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
          }}>
          {items.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex items-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 select-none">
              {/* Colour-coded monogram */}
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-xs font-bold text-white shrink-0"
                style={{ backgroundColor: skill.color }}>
                {skill.abbr}
              </span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Section ── */

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-b from-zinc-50 via-blue-50/20 to-zinc-50 dark:from-zinc-900/50 dark:via-zinc-900/80 dark:to-zinc-900/50 transition-colors overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with daily"
        />

        {/* Marquee rows */}
        <div className="space-y-10 mt-4">
          {CATEGORIES.map((cat) => (
            <SkillMarquee key={cat.id} category={cat} />
          ))}
        </div>

        {/* Spoken languages */}
        <div className="mt-20 text-center">
          <span className="inline-flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg mb-8">
            Spoken Languages
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "English — Fluent",
              "Persian (Farsi) — Native",
              "French — Intermediate",
            ].map((lang) => (
              <span
                key={lang}
                className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-6 py-3 text-sm text-zinc-700 dark:text-zinc-300 font-medium shadow-sm hover:shadow-md transition-shadow">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
