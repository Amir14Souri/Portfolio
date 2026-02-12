"use client";

import SectionHeading from "./SectionHeading";

interface ToolItem {
  name: string;
  logo: string;
}

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  tools: ToolItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    badge: "Languages",
    badgeColor: "bg-blue-500",
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
    id: "frameworks",
    title: "Frameworks & Libraries",
    badge: "Frameworks",
    badgeColor: "bg-emerald-500",
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
    id: "databases",
    title: "Databases & Cloud",
    badge: "Cloud & Data",
    badgeColor: "bg-purple-500",
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
    id: "tools",
    title: "Development Tools",
    badge: "Dev Tools",
    badgeColor: "bg-orange-500",
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

// Full-width rotating carousel component
function FullWidthCarousel({ category }: { category: SkillCategory }) {
  return (
    <div className="w-full mb-8">
      {/* Badge */}
      <div className="flex items-center gap-4 mb-4">
        <span
          className={`inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-full ${category.badgeColor}`}>
          {category.badge}
        </span>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
          {category.title}
        </h3>
      </div>

      {/* Carousel Container */}
      <div className="relative bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden backdrop-blur-sm shadow-sm">
        <div className="carousel-wrapper overflow-hidden py-8 px-4">
          <div
            className={`carousel-track-${category.id} flex items-center gap-8`}>
            {/* First set of tools */}
            {category.tools.map((tool, index) => (
              <div
                key={`${category.id}-first-${index}`}
                className="carousel-item flex flex-col items-center justify-center min-w-[120px] flex-shrink-0 group cursor-pointer">
                <div className="text-4xl mb-3 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {tool.logo}
                </div>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 text-center whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {category.tools.map((tool, index) => (
              <div
                key={`${category.id}-second-${index}`}
                className="carousel-item flex flex-col items-center justify-center min-w-[120px] flex-shrink-0 group cursor-pointer">
                <div className="text-4xl mb-3 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {tool.logo}
                </div>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 text-center whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover overlay to pause animation */}
        <div className="absolute inset-0 bg-transparent carousel-pause-overlay"></div>
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

        {/* Full-width carousels */}
        <div className="mt-12 space-y-6">
          {SKILL_CATEGORIES.map((category) => (
            <FullWidthCarousel key={category.id} category={category} />
          ))}
        </div>

        {/* Human Languages Section */}
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-full bg-indigo-500">
              Human Languages
            </span>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Communication
            </h3>
          </div>

          <div className="bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 backdrop-blur-sm shadow-sm">
            <div className="flex flex-wrap gap-3">
              {[
                "English — Fluent",
                "Persian (Farsi) — Native",
                "French — Intermediate",
              ].map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-zinc-200 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 font-medium">
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
