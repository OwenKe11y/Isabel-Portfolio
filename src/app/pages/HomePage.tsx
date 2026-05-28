import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { CollaborativeProjects } from '../components/CollaborativeProjects';
import { UXProcess } from '../components/UXProcess';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { ExperimentalWorkCTA } from '../components/ExperimentalWorkCTA';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <CollaborativeProjects />
      <UXProcess />
      <Skills />
      <Experience />
      <ExperimentalWorkCTA />
      <Footer />
    </div>
  );
}
