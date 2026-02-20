import { CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../components/SectionHeading";
import { ACADEMIC_SERVICES } from "@/app/portfolio";

export default function AcademicServiceSection() {
  return (
    <section
      id="service"
      className="relative overflow-hidden py-24 px-6">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Academic Service"
          subtitle="Voluntary contributions to the academic community"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACADEMIC_SERVICES.map((s, i) => {
            return (
              <Card variant="active" key={i} className="text-center">
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 p-2 text-cyan-500">
                    <div
                      className="h-10 w-10 bg-cyan-500"
                      style={{
                        maskImage: `url(${s.logo})`,
                        maskSize: "contain",
                        maskPosition: "center",
                        maskRepeat: "no-repeat",
                        WebkitMaskImage: `url(${s.logo})`,
                        WebkitMaskSize: "contain",
                        WebkitMaskPosition: "center",
                        WebkitMaskRepeat: "no-repeat",
                      }}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {s.role}
                  </h3>
                  <p className="text-xs font-medium text-cyan-500">{s.event}</p>
                  <Badge variant="outline" className="gap-1 text-[11px]">
                    <CalendarDays className="h-3 w-3" />
                    {s.period}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
