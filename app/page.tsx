import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ResearchInterests from "./components/ResearchInterests";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import AcademicServiceSection from "./components/AcademicServiceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
// import PublicationsSection from "./components/PublicationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GlobalBackground from "./components/GlobalBackground";

export default function Home() {
  return (
    <>
      <GlobalBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        {/* <PublicationsSection /> */}
        <EducationSection />
        <ResearchInterests />
        <SkillsSection />
        <AcademicServiceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
