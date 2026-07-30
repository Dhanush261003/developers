import PageHero from '../components/Common/PageHero';
import TestimonialsSlider from '../components/Testimonials/TestimonialsSlider';
import CTABanner from '../components/CTA/CTABanner';
import { useSEO } from '../hooks/useSEO';

export default function Testimonials() {
  useSEO({
    title: 'Testimonials',
    description: 'Read what clients say about working with Developers on their WordPress, React and Framer website projects.',
  });

  return (
    <>
      <PageHero
        eyebrow="Client Stories"
        title="Trusted by teams who"
        gradWord="value results."
        description="A few words from clients whose websites we've designed, built, and continue to support."
      />
      <TestimonialsSlider withHeading={false} />
      <CTABanner
        title="Ready to become"
        gradWord="our next story?"
        description="Reach out and let's start planning your project."
      />
    </>
  );
}
