import Layout from "@/components/Layout/Layout";
import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { SectionErrorBoundary } from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <Layout>
      <Navigation />
      <main>
        <SectionErrorBoundary sectionName="Hero">
          <Hero />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="About">
          <About />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Projects">
          <Projects />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Experience">
          <Experience />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Contact">
          <Contact />
        </SectionErrorBoundary>
      </main>
      <Footer />
    </Layout>
  );
}
