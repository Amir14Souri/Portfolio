import { BookOpen, ExternalLink } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { PUBLICATIONS } from "@/app/portfolio";

export default function PublicationsSection() {
  return (
    <section
      id="publications"
      className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Publications"
          subtitle="Selected research publications and preprints"
        />
        <div className="space-y-4">
          {PUBLICATIONS.map((pub, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
                <BookOpen size={20} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    {pub.title}
                  </h3>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-rose-500 transition-colors"
                      aria-label="View publication">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {pub.authors}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 italic">
                  {pub.venue}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                    {pub.year}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${pub.status === "Published"
                      ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
                      }`}>
                    {pub.status}
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
