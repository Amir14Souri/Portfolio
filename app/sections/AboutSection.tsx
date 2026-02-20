import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../components/SectionHeading";
import { ABOUT } from "@/app/portfolio";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-6">
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-500/10" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading
          title={ABOUT.title}
          subtitle={ABOUT.subtitle}
        />
        <Card>
          <CardContent className="space-y-5 p-8 text-lg leading-relaxed text-muted-foreground">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
