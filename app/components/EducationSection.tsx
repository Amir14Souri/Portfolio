import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const EDUCATION = [
  {
    degree: "B.Sc. in Computer Engineering",
    institution: "Sharif University of Technology",
    location: "Tehran Iran",
    period: "2022 - Present",
    gpa: "",
    description:
      "Started with basics like programming, Focus on AI an ML",
  },
  {
    degree: "Diploma of Mathematics and Physics",
    institution: "Shahid Beheshti High School",
    location: "Tehran, Iran",
    period: "2019 - 2022",
    gpa: "",
    description: "",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-gradient-to-b from-blue-50/30 via-white to-purple-50/30 dark:from-zinc-900/30 dark:via-zinc-950 dark:to-zinc-900/50 transition-colors relative overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading title="Education" subtitle="My academic journey" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden sm:block" />

          <div className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-blue-500/30 bg-white dark:bg-zinc-950">
                    <GraduationCap
                      size={20}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                    {edu.location} &bull; GPA: {edu.gpa}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {edu.description}
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
