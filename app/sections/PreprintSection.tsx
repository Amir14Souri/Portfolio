import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../components/SectionHeading";
import { PREPRINTS, SITE } from "@/app/portfolio";

export default function PreprintSection() {
  return (
    <section id="preprint" className="lab-section lab-section-grid relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Preprint"
          subtitle="Research shared on arXiv and currently under review"
        />
        <div className="space-y-4">
          {PREPRINTS.map((preprint, index) => (
            <Card
              data-reveal
              data-reveal-delay={Math.min(index, 2) * 60}
              variant="top"
              key={preprint.title}
              className="lab-preprint">
              <CardContent className="gap-3 p-6">
                <div className="min-w-0 select-text space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{preprint.title}</h3>
                  <p className="lab-preprint-authors text-sm leading-relaxed text-muted-foreground">
                    {preprint.authors.map((author, authorIndex) => (
                      <span key={author}>
                        {authorIndex > 0 && (authorIndex === preprint.authors.length - 1 ? ", and " : ", ")}
                        {author === SITE.fullName ? <strong className="font-semibold text-foreground">{author}</strong> : author}
                      </span>
                    ))}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{preprint.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-xs">{preprint.year}</Badge>
                    <Badge variant="outline" className="text-xs text-accent-label">{preprint.status}</Badge>
                  </div>
                  <a href={preprint.arxiv} target="_blank" rel="noopener noreferrer" className="lab-preprint-link inline-flex items-center gap-2 text-sm font-medium">
                    View on arXiv <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
