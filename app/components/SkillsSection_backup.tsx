"use client";

import { Code2, Wrench, Languages, Database, Palette } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface ToolItem {
  name: string;
  logo: string;
}

interface SkillGroup {
  icon: typeof Code2;
  title: string;
  color: string;
  bg: string;
  tools: ToolItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: Code2,
    title: "Programming Languages",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-cyan-500/10",
    tools: [
      { name: "Python", logo: "🐍" },
      { name: "TypeScript", logo: "📘" },
      { name: "JavaScript", logo: "📒" },
      { name: "Java", logo: "☕" },
      { name: "C++", logo: "⚡" },
      { name: "Go", logo: "🐹" },
      { name: "Rust", logo: "🦀" },
      { name: "SQL", logo: "🗄️" },
    ],
  },
  {
    icon: Wrench,
    title: "Frameworks & Libraries",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-cyan-500/10",
    tools: [
      { name: "React", logo: "⚛️" },
      { name: "Next.js", logo: "▲" },
      { name: "Node.js", logo: "📗" },
      { name: "PyTorch", logo: "🔥" },
      { name: "TensorFlow", logo: "🧠" },
      { name: "Express", logo: "🚂" },
      { name: "FastAPI", logo: "⚡" },
      { name: "Tailwind CSS", logo: "🎨" },
    ],
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10",
    tools: [
      { name: "PostgreSQL", logo: "🐘" },
      { name: "MongoDB", logo: "🍃" },
      { name: "Redis", logo: "🔴" },
      { name: "AWS", logo: "☁️" },
      { name: "GCP", logo: "🌥️" },
      { name: "Docker", logo: "🐳" },
      { name: "Kubernetes", logo: "⎈" },
      { name: "Firebase", logo: "🔥" },
    ],
  },
  {
    icon: Palette,
    title: "Development Tools",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10",
    tools: [
      { name: "Git", logo: "📚" },
      { name: "GitHub", logo: "🐙" },
      { name: "VS Code", logo: "💙" },
      { name: "Figma", logo: "🎯" },
      { name: "Linux", logo: "🐧" },
      { name: "Bash", logo: "💻" },
      { name: "LaTeX", logo: "📝" },
      { name: "Postman", logo: "📮" },
    ],
  },
];

// Rotating Tools Carousel Component
function RotatingToolsCarousel({ tools }: { tools: ToolItem[] }) {
  return (
    <div className="relative overflow-hidden h-16 flex items-center group">
      <div
        className="flex items-center gap-6 animate-carousel group-hover:pause-animation"
        style={{
          width: "200%", // Make it wider to accommodate duplicated items
        }}
      >
        {/* Duplicate tools to create seamless loop */}
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={`${tool.name}-${index}`}
            className="flex flex-col items-center justify-center min-w-[80px] tool-item"
          >
            <div className="text-2xl mb-1 transform hover:scale-110 transition-transform duration-200">
              {tool.logo}
            </div>
            <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium text-center whitespace-nowrap">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-zinc-50 via-blue-50/20 to-zinc-50 dark:from-zinc-900/50 dark:via-zinc-900/80 dark:to-zinc-900/50 transition-colors">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Skills & Tools"
          subtitle="Technologies, tools, and languages I work with"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${group.bg} transition-all duration-200 group-hover:scale-105`}
                  >
                    <Icon size={24} className={group.color} />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="relative">
                  <RotatingToolsCarousel
                    tools={group.tools}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages Section */}
        <div className="mt-12">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                <Languages size={24} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "English — Fluent",
                "Persian (Farsi) — Native",
                "French — Intermediate"
              ].map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 font-medium"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
