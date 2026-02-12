import {
  Cpu,
  Brain,
  BarChart3,
  Network,
  ShieldCheck,
  Globe,
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
      className="py-24 px-6 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Research Interests"
          subtitle="Areas of study and research that I am passionate about"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INTERESTS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg dark:hover:shadow-zinc-900/50">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
