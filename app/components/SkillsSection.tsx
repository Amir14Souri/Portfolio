"use client";

import {
  DiPython,
  DiJavascript1,
  DiJava,
  DiReact,
  DiPostgresql,
  DiDocker,
  DiGit,
  DiGithubBadge,
  DiLinux,
} from "react-icons/di";
import {
  SiTypescript,
  SiCplusplus,
  SiC,
  SiR,
  SiNextdotjs,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiDjango,
  SiFlask,
  SiGunicorn,
  SiNginx,
  SiAntdesign,
  SiGitlab,
  SiTailwindcss,
  SiKubernetes,
  SiFigma,
  SiPostman,
  SiMysql,
  SiLatex,
  SiMarkdown,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";
import { useTheme } from "next-themes";

interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

interface Skill {
  name: string;
  icon: React.ComponentType<any> | null;
  color: string;
}

const SKILLS: (isDark: boolean) => Record<string, Skill> = (isDark) => ({
  Python: { name: "Python", icon: DiPython, color: "#3776AB" },
  TypeScript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  JavaScript: { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
  Java: { name: "Java", icon: DiJava, color: "#007396" },
  R: { name: "R", icon: SiR, color: "#2763A5" },
  C: { name: "C", icon: SiC, color: "#A8B9CC" },
  "C++": { name: "C++", icon: SiCplusplus, color: "#00599C" },
  SQL: { name: "SQL", icon: SiMysql, color: "#4479A1" },
  React: { name: "React", icon: DiReact, color: "#61DAFB" },
  "Next.js": { name: "Next.js", icon: SiNextdotjs, color: isDark ? "#ffffff" : "#000000" },
  PyTorch: { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  TensorFlow: { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  "Hugging Face": { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
  "Scikit-Learn": { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
  NumPy: { name: "NumPy", icon: SiNumpy, color: "#013243" },
  Pandas: { name: "Pandas", icon: SiPandas, color: "#150458" },
  Matplotlib: { name: "Matplotlib", icon: null, color: "#11557c" },
  "Tailwind CSS": { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  PostgreSQL: { name: "PostgreSQL", icon: DiPostgresql, color: "#4169E1" },
  Docker: { name: "Docker", icon: DiDocker, color: "#2496ED" },
  Kubernetes: { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  Git: { name: "Git", icon: DiGit, color: "#F05032" },
  GitHub: { name: "GitHub", icon: DiGithubBadge, color: isDark ? "#e7e8e8" : "#181717" },
  Figma: { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  Linux: { name: "Linux", icon: DiLinux, color: "#FCC624" },
  Postman: { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  Django: { name: "Django", icon: SiDjango, color: "#092E20" },
  Flask: { name: "Flask", icon: SiFlask, color: isDark ? "#ffffff" : "#000000" },
  Gunicorn: { name: "Gunicorn", icon: SiGunicorn, color: "#499848" },
  Nginx: { name: "Nginx", icon: SiNginx, color: "#269539" },
  "Ant Design": { name: "Ant Design", icon: SiAntdesign, color: "#0170FE" },
  Zustand: { name: "Zustand", icon: null, color: "#000000" },
  GitLab: { name: "GitLab", icon: SiGitlab, color: "#FCA121" },
  Markdown: { name: "Markdown", icon: SiMarkdown, color: isDark ? "#ffffff" : "#000000" },
  LaTeX: { name: "LaTeX", icon: SiLatex, color: "#008080" },
});

const CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "R", "SQL"],
  },
  {
    id: "ml",
    title: "Machine Learning & GenAI",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-Learn"],
  },
  {
    id: "data-science",
    title: "Data Science",
    skills: ["NumPy", "Pandas", "Matplotlib"],
  },
  {
    id: "back",
    title: "Backend Development",
    skills: ["Django", "Flask", "Gunicorn", "Nginx", "PostgreSQL"],
  },
  {
    id: "front",
    title: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "Ant Design", "Zustand"],
  },
  {
    id: "infra",
    title: "DevOps & Infrastructure",
    skills: ["Linux", "Git", "GitHub", "GitLab", "Docker", "Kubernetes", "Postman"],
  },
  {
    id: "others",
    title: "Others",
    skills: ["Figma", "Markdown", "LaTeX"],
  }
];

const SPOKEN_LANGUAGES = {
  "English": "Fluent",
  "Persian (Farsi)": "Native",
  "French": "Intermediate",
};

export default function SkillsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme ? resolvedTheme === "dark" : true;

  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A concise readout of the stacks and tools I rely on"
        />

        <div className="mt-8 columns-1 gap-5 md:columns-2 lg:columns-3">
          {CATEGORIES.map((category) => (
            <Card
              key={category.id}
              className="mb-5 break-inside-avoid border border-border/60 bg-card/70 shadow-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <span className="border border-blue-500/40 bg-blue-500/10 text-blue-500 flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium">
                    {category.skills.length}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skillName) => {
                    const skill = SKILLS(isDark)[skillName];
                    if (!skill) {
                      return (
                        <span
                          key={skillName}
                          className="flex cursor-default items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-sm text-foreground/90"
                        >
                          {skillName}
                        </span>
                      );
                    }
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="flex cursor-default items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-sm text-foreground/90"
                      >
                        {Icon && <Icon className="min-h-4 min-w-4 max-h-4 max-w-4" style={{ color: skill.color }} />}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 border-t border-white/20 pt-10 text-center">
          <Badge
            variant="muted"
            className="cursor-default mb-5 rounded-full border-border/80 px-4 py-1 text-xs uppercase tracking-[0.35em]">
            Spoken Languages
          </Badge>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(SPOKEN_LANGUAGES).map(([language, level]) => (
              <Badge key={language} variant="outline" className="cursor-default rounded-full px-4 py-1 font-medium bg-white/30 dark:bg-black/30">
                <span className="text-foreground/80">{language}</span>
                <span className="ml-2 text-[0.85rem] uppercase tracking-[0.4em] text-muted-foreground/70">
                  {level}
                </span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
