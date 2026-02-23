import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Research } from './components/Research';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';

export function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-accent/30 selection:text-accent-hover relative overflow-hidden">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 opacity-80" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Research />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
        </main>
      </div>
    </div>
  );
}
