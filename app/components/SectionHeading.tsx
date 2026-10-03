const SECTION_NUMBERS: Record<string, string> = {
  "About Me": "01", "Experience": "02", "Preprint": "03", "Projects": "04",
  "Education": "05", "Skills & Technologies": "06", "Academic Service & Leadership": "07", "Get in Touch": "08",
};

export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="lab-section-heading" data-reveal>
      <div className="lab-heading-title">
        <span className="lab-section-index" aria-hidden="true">{SECTION_NUMBERS[title] || "01"}</span>
        <h2>{title}</h2>
      </div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
