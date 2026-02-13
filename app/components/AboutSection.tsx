import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-50 py-24 px-6 dark:from-zinc-950 dark:via-zinc-900/40 dark:to-zinc-950">
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-500/10" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading
          title="About Me"
          subtitle="A concise overview of my journey, motivations, and values"
        />
        <Card className="bg-background/90">
          <CardContent className="space-y-5 p-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a Computer Engineering student at Sharif University of Technology,
              ranked 14th among more than 145,000 participants in Iran&apos;s
              national university entrance exam. I thrive in collaborative
              engineering environments where backend systems, infrastructure,
              and machine learning intersect.
            </p>
            <p>
              Beyond coursework I design and deploy practical systems that bridge
              theory with impact—whether that&apos;s research tooling, teaching, or
              developer platforms. I&apos;m relentlessly curious, always reading
              about science, technology, and self-development, and I&apos;m eager to
              partner on projects that demand rigor and craft.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
