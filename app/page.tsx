import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import AcademicServiceSection from "./sections/AcademicServiceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import PreprintSection from "./sections/PreprintSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import { SITE } from "./portfolio";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${SITE.url}/#person`,
            name: SITE.fullName,
            alternateName: SITE.aliases,
            url: SITE.url,
            image: new URL(SITE.photoSrc, SITE.url).href,
            sameAs: [
              "https://github.com/Amir14Souri",
              "https://linkedin.com/in/amirhossein-souri",
            ],
          }),
        }}
      />
      
      <ScrollReveal />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PreprintSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <AcademicServiceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
