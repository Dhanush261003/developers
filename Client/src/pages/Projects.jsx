import PageHero from '../components/Common/PageHero';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid';
import CTABanner from '../components/CTA/CTABanner';
import { useSEO } from '../hooks/useSEO';

export default function Projects() {
  useSEO({
    title: 'Projects',
    description: 'Explore live WordPress, React and Framer websites built by Developers, including Global Placement Centre, Hydro Nikos and Trueline Management Services.',
  });

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects we're"
        gradWord="proud to ship."
        description="Every project below is live in production. Filter by technology to see relevant examples."
      />
      <PortfolioGrid />
      <CTABanner
        title="Have a project"
        gradWord="in mind?"
        description="Let's talk about what you're building and how we can help bring it to life."
      />
    </>
  );
}
