import { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSlider } from '../components/sections/HeroSlider';
import { About } from '../components/sections/About';
import { Synergy } from '../components/sections/Synergy';
import { Team } from '../components/sections/Team';
import { Projects } from '../components/sections/Projects';
import { Portfolio } from '../components/sections/Portfolio';
import { Credibility } from '../components/sections/Credibility';
import { CTA } from '../components/sections/CTA';

export function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const timer = setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <About />
        <Synergy />
        <Projects />
        <Team />
        <Portfolio />
        <Credibility />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
