import { Users, Mic, UserCheck, Handshake, CalendarDays } from "lucide-react";
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
      className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50 transition-colors relative overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Academic Service"
          subtitle="Voluntary contributions to the academic community"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 text-center transition-all hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:shadow-md dark:hover:shadow-zinc-900/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white leading-tight">
                  {s.role}
                </h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium leading-snug">
                  {s.event}
                </p>
                <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                  <CalendarDays size={10} />
                  {s.period}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
