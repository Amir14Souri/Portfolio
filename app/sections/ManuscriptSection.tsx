import { BookOpen } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
            <Card
              variant="active"
              key={manuscript.title}
              className="border transition">
              <CardContent className="flex-row items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <BookOpen size={18} aria-hidden="true" />
                </div>
                <div className="min-w-0 space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Manuscript</p>
                  <h3 className="text-xl font-semibold text-foreground">{manuscript.title}</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-xs">{manuscript.year}</Badge>
                    <Badge variant="outline" className="text-xs text-amber-700 dark:text-amber-400">{manuscript.status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
