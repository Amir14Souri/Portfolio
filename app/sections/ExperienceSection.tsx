import { BookOpen } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "../components/SectionHeading";
import {
  EXPERIENCE_CATEGORY_CONFIG,
  EXPERIENCES,
  TA_EXPERIENCES,
} from "@/app/portfolio";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="lab-section relative px-6 py-24">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Experience"
          subtitle="Technical, research, and teaching experiences"
        />

        <div className="mb-8 flex flex-wrap justify-start gap-4">
          {Object.entries(EXPERIENCE_CATEGORY_CONFIG).map(([key, { label, icon: Icon, accent }]) => (
            <span key={key} className={`${accent} lab-category-label inline-flex items-center gap-2 text-xs font-medium`}>
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        <div className="lab-experience-list space-y-4">
          {EXPERIENCES.map((exp, index) => {
            const config = EXPERIENCE_CATEGORY_CONFIG[exp.category];
            const Icon = config.icon;
            return (
              <Card
                data-reveal
                data-reveal-delay={Math.min(index, 2) * 60}
                variant="left"
                className={config.accent}
                key={`${exp.organization}-${exp.period}`}>
                <CardContent className="gap-5 p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="lab-category-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="lab-category-label text-sm font-semibold uppercase tracking-wide">
                          {config.label}
                        </p>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{exp.organization}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="lab-date text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <Separator />
                  <ul className="space-y-1.5 text-sm text-muted-foreground md:ps-6">
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

        <div className="mt-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TA_EXPERIENCES.map((ta, index) => (
              <Card
                data-reveal
                data-reveal-delay={Math.min(index, 2) * 60}
                variant="left"
                key={`${ta.course}-${ta.period}`}
                className={`${EXPERIENCE_CATEGORY_CONFIG.teaching.accent} lab-teaching flex items-start gap-3 p-3 text-left`}>
                <div className="lab-category-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground pb-0.5">{ta.course}</p>
                  <p className="text-xs text-muted-foreground">{ta.organization}</p>
                  <p className="text-xs font-mono text-muted-foreground/80">{ta.period}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
