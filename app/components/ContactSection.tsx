import { Mail, Github, Linkedin, MapPin, Phone, Globe } from "lucide-react";
import SectionHeading from "./SectionHeading";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: Globe,
    label: "Website",
    value: "yourwebsite.com",
    href: "https://yourwebsite.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (234) 567-8900",
    href: "tel:+12345678900",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "City, Country",
    href: "",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 transition-colors relative overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Get in Touch"
          subtitle="Feel free to reach out for collaborations, questions, or just a friendly hello"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? "a" : "div";
            const externalProps = href
              ? href.startsWith("http")
                ? { target: "_blank" as const, rel: "noopener noreferrer" }
                : {}
              : {};
            return (
              <Wrapper
                key={label}
                {...(href ? { href } : {})}
                {...externalProps}
                className="group flex items-center gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg dark:hover:shadow-zinc-900/50">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white truncate">
                    {value}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
