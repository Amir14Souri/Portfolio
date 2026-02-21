import { ChevronRight, GraduationCap, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../components/SectionHeading";
import { EDUCATION } from "@/app/portfolio";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 px-6">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading title="Education" subtitle="My academic journey" />

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-500 to-blue-500 sm:block" />

          <div className="space-y-6">
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="relative flex gap-6">
                <div className="hidden sm:flex w-12 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/8 text-cyan-500 backdrop-blur-sm">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6 gap-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        {edu.logo && (
                          <span
                            className="mt-0.5 w-12 h-12 shrink-0 bg-zinc-700/60 dark:bg-zinc-400/60"
                            style={{
                              maskImage: `url('${edu.logo}')`,
                              maskSize: "contain",
                              maskRepeat: "no-repeat",
                              maskPosition: "center",
                            }}
                          />
                        )}
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-sm font-medium text-cyan-500">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {edu.period}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    {edu.description && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4" />
                        {edu.description}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
