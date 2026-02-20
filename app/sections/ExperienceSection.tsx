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
      className="relative overflow-hidden py-24 px-6">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Experience"
          subtitle="Technical, research, and teaching experiences"
        />

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {Object.entries(EXPERIENCE_CATEGORY_CONFIG).map(([key, { label, icon: Icon, color }]) => (
            <Badge key={key} variant="outline" className="gap-2 rounded-2xl px-4 py-2 text-xs font-medium">
              <Icon className={`h-4 w-4 ${color}`} />
              {label}
            </Badge>
          ))}
          <Badge variant="outline" className="gap-2 rounded-2xl px-4 py-2 text-xs font-medium">
            <BookOpen className="h-4 w-4 text-cyan-500" />
            Teaching Assistance
          </Badge>
        </div>

        <div className="space-y-4">
          {EXPERIENCES.map((exp) => {
            const config = EXPERIENCE_CATEGORY_CONFIG[exp.category];
            const Icon = config.icon;
            return (
              <Card
                variant="active"
                key={exp.title}>
                <CardContent className="gap-4 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${config.bg}`}>
                        <Icon className={`h-4 w-4 ${config.color}`} />
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

        <div className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TA_EXPERIENCES.map((ta) => (
              <Card
                variant="active"
                key={`${ta.course}-${ta.period}`}
                className="flex items-start gap-3 p-3 text-left">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground pb-0.5">{ta.course}</p>
                  <p className="text-xs text-muted-foreground">{ta.organization}</p>
                  <p className="text-[11px] font-mono text-muted-foreground/80">{ta.period}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
