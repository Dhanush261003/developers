import PageHero from '../components/Common/PageHero';
import ServicesList from '../components/Services/ServicesList';
import CTABanner from '../components/CTA/CTABanner';
import { useSEO } from '../hooks/useSEO';

export default function Services() {
  useSEO({
    title: 'Services',
    description: 'React.js, WordPress and Framer development, landing pages, redesigns, SEO, speed optimization and maintenance — explore our full service list.',
  });

  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Full-service web"
        gradWord="development."
        description="From a single landing page to a complete React application, every service below includes design, build, and post-launch support."
      />
      <ServicesList />
      <CTABanner
        title="Not sure which service"
        gradWord="you need?"
        description="Tell us what you're trying to achieve and we'll recommend the right approach."
      />
    </>
  );
}
