import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSlider } from '../components/sections/HeroSlider';
import { About } from '../components/sections/About';
import { Synergy } from '../components/sections/Synergy';
import { Team } from '../components/sections/Team';
import { Services } from '../components/sections/Services';
import { Portfolio } from '../components/sections/Portfolio';
import { Blog } from '../components/sections/Blog';
import { CTA } from '../components/sections/CTA';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <About />
        <Synergy />
        <Services />
        <Team />
        <Portfolio />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
