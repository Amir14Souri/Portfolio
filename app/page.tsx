import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import AcademicServiceSection from "./sections/AcademicServiceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
// import PublicationsSection from "./components/PublicationsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import GlobalBackground from "./components/GlobalBackground";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Amirhossein Souri",
            alternateName: "امیرحسین صوری",
            url: "https://souuri.ir",
            sameAs: [
              "https://github.com/Amir14Souri",
              "https://linkedin.com/in/amirhossein-souri",
            ],
          }),
        }}
      />
      
      <GlobalBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        {/* <PublicationsSection /> */}
        <EducationSection />
        <SkillsSection />
        <AcademicServiceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
