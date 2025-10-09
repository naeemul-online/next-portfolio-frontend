import AboutSection from "@/components/modules/Home/AboutSection";
import ContactMe from "@/components/modules/Home/ContactMe";
import Hero from "@/components/modules/Home/Hero";
import Projects from "@/components/modules/Home/Projects";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Projects />
      <ContactMe />
    </div>
  );
}
