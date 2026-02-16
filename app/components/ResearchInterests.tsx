import {
  BarChart3,
  Brain,
  Cpu,
  Globe,
  Network,
  ShieldCheck,
} from "lucide-react";

import SectionHeading from "./SectionHeading";

const INTERESTS = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Deep learning architectures, neural network optimization, and model interpretability.",
  },
  {
    icon: Cpu,
    title: "Computer Vision",
    description:
      "Image classification, object detection, and visual representation learning.",
  },
  {
    icon: Network,
    title: "Natural Language Processing",
    description:
      "Language models, text generation, and semantic understanding.",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description:
      "Statistical analysis, data visualization, and large-scale data processing.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Network security, vulnerability analysis, and secure system design.",
  },
  {
    icon: Globe,
    title: "Distributed Systems",
    description:
      "Cloud computing, microservices, and scalable architecture design.",
  },
];

export default function ResearchInterests() {
  return (
    <section
      id="research"
      className="relative overflow-hidden py-24 px-6">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Research Interests"
          subtitle="Areas of study and research that I am passionate about"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {INTERESTS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border/60 bg-background/80 p-4 text-left transition hover:-translate-y-0.5 hover:border-border/40">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                <Icon size={18} />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
