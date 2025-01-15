import { Hero } from '../components/home/Hero';
import { FeaturedEvents } from '../components/home/FeaturedEvents';
import { HowItWorks } from '../components/home/HowItWorks';

export function Home() {
  return (
    <main>
      <Hero />
      <FeaturedEvents />
      <HowItWorks />
    </main>
  );
}