import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900/50 dark:to-zinc-950 transition-colors relative overflow-hidden">
      {/* Subtle background blurs */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-xl" />
      </div>
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading title="About Me" />
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-8 sm:p-10">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
            I'm a Computer Engineering student at Sharif University of
            Technology, ranked 14th among more than 145,000 participants in
            Iran's national university entrance exam. Alongside my academic
            studies, I've worked on collaborative software projects,
            strengthening my skills in backend systems, infrastructure, and
            problem-solving. I'm particularly interested in Artificial
            Intelligence and enjoy building practical systems that bridge theory
            and real-world applications.
          </p>

          <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
            Beyond academics, I enjoy reading across a range of topics,
            particularly in science, technology, and self-development. I'm always looking for
            opportunities to collaborate, learn, and contribute to impactful
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}
