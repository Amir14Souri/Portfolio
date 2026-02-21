"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../components/SectionHeading";
import { useTheme } from "next-themes";
import { getSkillsMap, SKILL_CATEGORIES, SPOKEN_LANGUAGES } from "@/app/portfolio";

export default function SkillsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme ? resolvedTheme === "dark" : true;

  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A concise readout of the stacks, tools, and skills I rely on"
        />

        <div className="mt-8 columns-1 gap-4 md:columns-2 lg:columns-3">
          {SKILL_CATEGORIES.map((category) => (
            <Card
              key={category.id}
              className="mb-4 break-inside-avoid">
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  {(category.count ?? true) && <span className="border border-cyan-500/40 bg-cyan-500/10 text-cyan-500 flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium">
                    {category.skills.length}
                  </span>}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skillName) => {
                    const skill = getSkillsMap(isDark)[skillName];
                    if (!skill) {
                      return (
                        <span
                          key={skillName}
                          className="flex items-center gap-2 rounded-full border border-border/80 bg-white/40 dark:bg-black/40 px-3 py-1 text-sm text-foreground/90"
                        >
                          {skillName}
                        </span>
                      );
                    }
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="flex items-center gap-2 rounded-full border border-border/80 bg-white/40 dark:bg-black/40 px-3 py-1 text-sm text-foreground/90"
                      >
                        {Icon && <Icon className="min-h-4 min-w-4 max-h-4 max-w-4" style={{ color: skill.color }} />}
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
            className="mb-5 rounded-full border-border/80 px-4 py-1 text-xs uppercase tracking-[0.35em] font-bold">
            Spoken Languages
          </Badge>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(SPOKEN_LANGUAGES).map(([language, level]) => (
              <Badge key={language} variant="outline" className="rounded-full px-4 py-1 font-medium bg-white/30 dark:bg-black/30">
                <span className="text-[0.85rem] uppercase tracking-[0.4em] text-foreground/80">
                  {language}
                </span>
                <span className="ml-2 text-muted-foreground/70">{level}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
