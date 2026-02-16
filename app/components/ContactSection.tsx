import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import SectionHeading from "./SectionHeading";
import { Card } from "@/components/ui/card";

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
      className="relative overflow-hidden py-24 px-6">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Get in Touch"
          subtitle="Feel free to reach out for collaborations, questions, or just a friendly hello"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? "a" : "div";
            const externalProps = href
              ? href.startsWith("http")
                ? { target: "_blank" as const, rel: "noopener noreferrer" }
                : {}
              : {};
            return (
              <Card
                variant="active"
                key={label}
                {...(href ? { href } : {})}
                {...externalProps}
                className="group p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                      {label}
                    </p>
                    <p className="truncate text-sm font-medium text-foreground">
                      {value}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
