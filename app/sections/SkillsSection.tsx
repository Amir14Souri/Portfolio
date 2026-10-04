import Image from "next/image";
import type { CSSProperties } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../components/SectionHeading";
import { getSkillsMap, SKILL_CATEGORIES, SPOKEN_LANGUAGES } from "@/app/portfolio";
import { skillBrandColors } from "@/lib/skill-colors";

const skillsMap = getSkillsMap();
const brandColors = Object.fromEntries(Object.values(skillsMap).map((skill) =>
  [skill.name, skillBrandColors(skill.color)]));

export default function SkillsSection() {

  return (
    <section id="skills" className="lab-section lab-section-grid px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A concise readout of the stacks, tools, and skills I rely on"
        />

        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {SKILL_CATEGORIES.map((category, index) => (
            <Card
              variant="left"
              data-reveal
              data-reveal-delay={Math.min(index, 2) * 60}
              key={category.id}
              className="lab-skills-card mb-4 break-inside-avoid">
              <CardContent className="lab-skill-content p-5 md:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <span className="lab-skill-count">
                    <span className="sr-only">{category.title}: </span>
                    {category.skills.length}
                    <span className="sr-only"> skills</span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skillName) => {
                    const skill = skillsMap[skillName];
                    if (!skill) {
                      return (
                        <span
                          key={skillName}
                          className="flex items-center gap-2 lab-skill rounded-sm border border-border bg-secondary/70 px-3 py-1 text-sm text-foreground/90"
                        >
                          {skillName}
                        </span>
                      );
                    }
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="flex items-center gap-2 lab-skill rounded-sm border border-border bg-secondary/70 px-3 py-1 text-sm text-foreground/90"
                      >
                        {Icon && <span className="lab-skill-icon h-4 w-4 shrink-0" aria-hidden="true"
                          style={{ "--skill-light": brandColors[skill.name].light, "--skill-dark": brandColors[skill.name].dark } as CSSProperties}>
                          <Icon className="h-4 w-4" />
                        </span>}
                        {skill.logo && (skill.logoTreatment === "monochrome" ?
                          <span className="lab-skill-icon lab-skill-monochrome-logo h-4 w-4 shrink-0" aria-hidden="true"
                            style={{
                              "--skill-light": brandColors[skill.name].light,
                              "--skill-dark": brandColors[skill.name].dark,
                              maskImage: `url(${skill.logo})`, maskSize: "contain",
                              maskPosition: "center", maskRepeat: "no-repeat",
                            } as CSSProperties} /> :
                          <span className={`lab-skill-logo h-4 w-4 shrink-0${skill.logoTreatment === "grayscale" ? " lab-skill-logo-grayscale" : ""}`} aria-hidden="true">
                            {skill.logoTreatment !== "grayscale" && <span className="lab-skill-logo-mask" style={{
                              maskImage: `url(${skill.logo})`, maskSize: "contain",
                              maskPosition: "center", maskRepeat: "no-repeat",
                            }} />}
                            <Image src={skill.logo} alt="" width={16} height={16} className="lab-skill-logo-color h-4 w-4 object-contain" />
                          </span>
                        )}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 border-t border-black/20 dark:border-white/20 pt-10 text-center">
          <Badge
            variant="glow"
            className="mb-5 rounded-md border-border/80 px-4 py-1 text-xs uppercase tracking-[0.08em] font-bold">
            Spoken Languages
          </Badge>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(SPOKEN_LANGUAGES).map(([language, level]) => (
              <Badge key={language} variant="outline" className="max-w-full flex-wrap rounded-md px-4 py-1 font-medium bg-white/30 dark:bg-black/30">
                <span className="min-w-0 max-w-full [overflow-wrap:anywhere] text-[0.85rem] uppercase tracking-[0.12em] lab-language-name text-foreground/80">
                  {language}
                </span>
                <span className="min-w-0 ml-2 text-muted-foreground/70">{level}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
