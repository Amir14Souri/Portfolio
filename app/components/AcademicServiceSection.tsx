import { CalendarDays, Handshake, Mic, UserCheck, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    icon: Users,
    role: "Senior Editor",
    event: "Byte Publication • CE, SUT",
    period: "May 2025 - Present",
  },
  {
    icon: Mic,
    role: "Technical & Graphical Design Staff",
    event: "Emeet • EE, SUT",
    period: "Aug 2025 - Oct 2025",
  },
  {
    icon: UserCheck,
    role: "Vice President & Technical Lead",
    event: "Hardwar • CE, SUT",
    period: "Feb 2025 - May 2025",
  },
  {
    icon: Handshake,
    role: "Technical Staff",
    event: "ICPC • CE, SUT",
    period: "Dec 2024",
  },
  {
    icon: Handshake,
    role: "Executive Staff",
    event: "CodoCodile • CE, SUT",
    period: "Nov 2024",
  },
  {
    icon: Handshake,
    role: "Social Media Lead",
    event: "Rayan AI Contest • CE, SUT",
    period: "Aug 2024 - Oct 2024",
  },
  {
    icon: Handshake,
    role: "Marketing & Executive Staff",
    event: "S4 • CE, SUT",
    period: "May 2024",
  },
  {
    icon: Handshake,
    role: "Content Lead & Social Media Staff",
    event: "WSS • CE, SUT",
    period: "Nov 2023 - Mar 2024",
  },
  {
    icon: Handshake,
    role: "Social Media Staff",
    event: "CodoCodile • CE, SUT",
    period: "Sep 2023 - Nov 2023",
  },
  {
    icon: Handshake,
    role: "Executive Staff",
    event: "ICPC • CE, SUT",
    period: "Apr 2023 - May 2023",
  },
];

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
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Card key={i} className="bg-card/90 text-center">
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {s.role}
                  </h3>
                  <p className="text-xs font-medium text-indigo-500">{s.event}</p>
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
