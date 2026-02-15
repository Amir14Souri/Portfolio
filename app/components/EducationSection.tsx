import { GraduationCap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
      className="relative overflow-hidden py-24 px-6">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading title="Education" subtitle="My academic journey" />

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500 to-purple-500 sm:block" />

          <div className="space-y-10">
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="relative flex gap-6">
                <div className="hidden sm:flex w-12 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/8 text-blue-500 backdrop-blur-sm">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                </div>
                <Card className="flex-1 bg-card/95">
                  <CardContent className="space-y-3 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-medium text-blue-500">
                          {edu.institution}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {edu.location}
                    </p>
                    {edu.description && (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {edu.description}
                      </p>
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
