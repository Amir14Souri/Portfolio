import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";

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
          title="About Me"
          subtitle="A concise overview of my journey, motivations, and values"
        />
        <Card className="bg-background/90">
          <CardContent className="space-y-5 p-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a Computer Engineering student at Sharif University of Technology,
              ranked 14th among more than 145,000 participants in Iran&apos;s national
              university entrance exam. Alongside my academic studies, I&apos;ve worked on
              collaborative software projects, strengthening my skills in backend systems,
              infrastructure, and problem-solving. I&apos;m particularly interested in Artificial
              Intelligence and enjoy building practical systems that bridge theory and
              real-world applications.
            </p>
            <p>
              Beyond academics, I enjoy reading across a range of topics, particularly in
              science, technology, and self-development. I&apos;m always looking for opportunities
              to collaborate, learn, and contribute to impactful projects.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
