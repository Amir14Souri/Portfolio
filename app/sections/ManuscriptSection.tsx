import { BookOpen } from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { MANUSCRIPTS } from "@/app/portfolio";

export default function ManuscriptSection() {
  return (
    <section id="manuscript" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Manuscript"
          subtitle="Research currently under review"
        />
        <div className="space-y-4">
          {MANUSCRIPTS.map((manuscript) => (
            <div
              key={manuscript.title}
              className="flex gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
                <BookOpen size={20} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {manuscript.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                    {manuscript.year}
                  </span>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
                    {manuscript.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
