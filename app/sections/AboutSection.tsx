import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../components/SectionHeading";
import { ABOUT } from "@/app/portfolio";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="lab-section relative px-6 py-24">
      <div className="relative z-10 mx-auto max-w-6xl lab-about-grid">
        <SectionHeading
          title={ABOUT.title}
          subtitle={ABOUT.subtitle}
        />
        <Card data-reveal data-reveal-delay="60">
          <CardContent className="lab-about-copy space-y-5 p-8 text-base leading-relaxed text-muted-foreground">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
