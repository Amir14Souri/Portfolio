import { BookOpen, Briefcase, FlaskConical } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
      className="relative overflow-hidden bg-zinc-50/60 py-24 px-6 dark:bg-zinc-950/40">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Experience"
          subtitle="Technical, research, and teaching experiences"
        />

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {Object.entries(CATEGORY_CONFIG).map(([key, { label, icon: Icon, color }]) => (
            <Badge key={key} variant="outline" className="gap-2 rounded-2xl px-4 py-2 text-xs font-medium">
              <Icon className={`h-4 w-4 ${color}`} />
              {label}
            </Badge>
          ))}
          <Badge variant="outline" className="gap-2 rounded-2xl px-4 py-2 text-xs font-medium">
            <BookOpen className="h-4 w-4 text-emerald-500" />
            Teaching Assistance
          </Badge>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp) => {
            const config = CATEGORY_CONFIG[exp.category];
            const Icon = config.icon;
            return (
              <Card key={exp.title} className="bg-card/95">
                <CardContent className="gap-4 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${config.bg}`}>
                        <Icon className={`h-5 w-5 ${config.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          {config.label}
                        </p>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{exp.organization}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <Separator className="opacity-70" />
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            <BookOpen className="h-4 w-4 text-emerald-500" /> Teaching Assistance
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TA_EXPERIENCES.map((ta) => (
              <div
                key={`${ta.course}-${ta.period}`}
                className="rounded-2xl border border-border/60 bg-background/70 p-3 text-left">
                <p className="text-sm font-semibold text-foreground">{ta.course}</p>
                <p className="text-xs text-muted-foreground">{ta.organization}</p>
                <p className="text-[11px] font-mono text-muted-foreground/80">{ta.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
