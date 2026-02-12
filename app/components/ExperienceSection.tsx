import { Briefcase, FlaskConical, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";

type ExperienceCategory = "technical" | "research";

interface Experience {
  category: ExperienceCategory;
  title: string;
  organization: string;
  period: string;
  points: string[];
}

interface TAExperience {
  course: string;
  organization: string;
  period: string;
}

const CATEGORY_CONFIG: Record<
  ExperienceCategory,
  { label: string; icon: typeof Briefcase; color: string; bg: string }
> = {
  technical: {
    label: "Technical",
    icon: Briefcase,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10",
  },
  research: {
    label: "Research",
    icon: FlaskConical,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10",
  },
};

const EXPERIENCES: Experience[] = [
  {
    category: "research",
    title: "Research Assistant",
    organization: "RIML Lab, Sharif University of Technology",
    period: "Dec 2025 - Present",
    points: [
      "Robust and Interpretable Machine Learning (PI: Dr.Rohban)",
      "Conducted research on machine unlearning and attacking methods",
      "Worked on unlearning methods for Text-to-Image diffusion models",
      // "Co-authored a paper submitted to [conference/journal].",
    ],
  },
  {
    category: "technical",
    title: "Software Engineer",
    organization: "Hamravesh",
    period: "Oct 2024 - Sep 2025",
    points: [
      "Hamravesh: Managed Kubernetes platform serving business clients and customers",
      "Developed and deployed a microservice, including backend APIs, frontend UI, and Kubernetes deployment",
      "Microservice considered as a marketplace for the oneclick services, deployed on the company's infrastructure",
      // "Built and maintained RESTful APIs serving 100K+ requests/day",
      // "Implemented CI/CD pipelines reducing deployment time by 40%.",
      // "Collaborated with cross-functional teams using Agile methodology.",
    ],
  },
];

const TA_EXPERIENCES: TAExperience[] = [
  {
    course: "Artificial Intelligence",
    organization: "SUT • Dr. Mahdieh Soleymani",
    period: "Fall 2025",
  },
  {
    course: "Artificial Intelligence",
    organization: "SUT • Mr. Samiei • Mr. Fereydooni",
    period: "Spring 2025",
  },
  {
    course: "Machine Learning",
    organization: "SUT • Dr. Abolfazl Motahari",
    period: "Spring 2025",
  },
  {
    course: "Probabillity and Statistics",
    organization: "SUT • Dr. Amir Najafi",
    period: "Spring 2024 • Spring 2026",
  },
  {
    course: "Advanced Programming (Java)",
    organization: "SUT • Dr. MohammadAmin Fazli",
    period: "Spring 2024 • Spring 2026",
  },
  {
    course: "Fundamentals of Programming (Python)",
    organization: "SUT • Mr. Kazemi",
    period: "Spring 2024",
  },
  {
    course: "Fundamentals of Programming (Python)",
    organization: "Sharif MicroMaster • Dr. Hamid Zarrabi-Zadeh",
    period: "Winter 2024 • Summer 2024 • Winter 2025 • Summer 2025 • Winter 2026",
  },
  {
    course: "Programming for Data Analysis",
    organization: "Sharif MicroMaster • Dr. AmirMahdi Sadeghzadeh",
    period: "Winter 2024",
  },
  {
    course: "Data Structures and Algorithms",
    organization: "Sharif MicroMaster • Dr. MohammadAli Abam",
    period: "Winter 2024",
  },
  {
    course: "Fundamentals of Programming (C)",
    organization: "SUT • Dr. MohammadAmin Fazli",
    period: "Fall 2023 • Fall 2024 • Fall 2025",
  },
  {
    course: "Fundamentals of Programming (Python)",
    organization: "SUT • Mr. Malekzadeh",
    period: "Fall 2023",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50 transition-colors relative overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Experience"
          subtitle="Technical, research, and teaching experiences"
        />

        {/* Category legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {(
            Object.entries(CATEGORY_CONFIG) as [
              ExperienceCategory,
              (typeof CATEGORY_CONFIG)[ExperienceCategory],
            ][]
          ).map(([key, { label, icon: Icon, color, bg }]) => (
            <div key={key} className="flex items-center gap-2 text-sm">
              <span
                className={`flex items-center justify-center h-7 w-7 rounded-lg ${bg}`}>
                <Icon size={14} className={color} />
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                {label}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-sm">
            <span className="flex items-center justify-center h-7 w-7 rounded-lg bg-emerald-500/10">
              <BookOpen
                size={14}
                className="text-emerald-600 dark:text-emerald-400"
              />
            </span>
            <span className="text-zinc-600 dark:text-zinc-400 font-medium">
              Teaching Assistance
            </span>
          </div>
        </div>

        {/* Main experiences (technical + research) */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, i) => {
            const config = CATEGORY_CONFIG[exp.category];
            const Icon = config.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg dark:hover:shadow-zinc-900/50">
                <div className="flex flex-wrap items-start gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${config.bg}`}>
                    <Icon size={20} className={config.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className={`font-medium ${config.color}`}>
                          {exp.organization}
                        </p>
                      </div>
                      <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Teaching Assistance — compact sub-section */}
        <div className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen
              size={16}
              className="text-emerald-600 dark:text-emerald-400"
            />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Teaching Assistance
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TA_EXPERIENCES.map((ta, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 transition-all hover:border-emerald-300 dark:hover:border-emerald-500/40">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                  <BookOpen
                    size={16}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white leading-tight truncate mb-1">
                    {ta.course}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                    {ta.organization}
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                    {ta.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
