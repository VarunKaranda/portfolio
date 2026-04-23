import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

function SectionDivider() {
  return <div className="section-divider" aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="section-base">
          <Hero />
        </div>

        <SectionDivider />

        <div className="section-alt">
          <About />
        </div>

        <SectionDivider />

        <div className="section-base">
          <Skills />
        </div>

        <SectionDivider />

        <div className="section-alt">
          <Experience />
        </div>

        <SectionDivider />

        <div className="section-base">
          <Projects />
        </div>

        <SectionDivider />

        <div className="section-alt">
          <Certifications />
        </div>

        <SectionDivider />

        <div className="section-base">
          <Education />
        </div>

        <SectionDivider />

        <div className="section-alt">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
