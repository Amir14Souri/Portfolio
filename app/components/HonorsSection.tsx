import { Award, Trophy, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const HONORS = [
  {
    icon: Trophy,
    title: "Dean's List",
    issuer: "University Name",
    year: "2022 – 2024",
    description:
      "Awarded for maintaining a GPA above 3.8 for four consecutive semesters.",
  },
  {
    icon: Award,
    title: "Best Undergraduate Thesis",
    issuer: "Department of Computer Science",
    year: "2024",
    description: "Recognized for outstanding thesis work on [topic].",
  },
  {
    icon: Star,
    title: "National Programming Olympiad — Silver Medal",
    issuer: "National Science Foundation",
    year: "2019",
    description:
      "Ranked among top 50 contestants nationwide in competitive programming.",
  },
  {
    icon: Award,
    title: "Academic Excellence Scholarship",
    issuer: "University Name",
    year: "2020 – 2024",
    description: "Full tuition scholarship awarded based on academic merit.",
  },
];

export default function HonorsSection() {
  return (
    <section
      id="honors"
      className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors relative overflow-hidden">
      <div className="mx-auto max-w-4xl relative z-10">
        <SectionHeading
          title="Honors & Awards"
          subtitle="Recognition and achievements throughout my academic career"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {HONORS.map((honor, i) => {
            const Icon = honor.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6 transition-all hover:border-amber-300 dark:hover:border-amber-500/50 hover:shadow-lg dark:hover:shadow-zinc-900/50">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-zinc-900 dark:text-white">
                      {honor.title}
                    </h3>
                    <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                      {honor.issuer}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                      {honor.year}
                    </p>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {honor.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
