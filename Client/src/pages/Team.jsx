import PageHero from '../components/Common/PageHero';
import TeamGrid from '../components/Team/TeamGrid';
import CTABanner from '../components/CTA/CTABanner';
import { useSEO } from '../hooks/useSEO';

export default function Team() {
  useSEO({
    title: 'Our Team',
    description: 'Meet the 3 developers behind Developers — full stack, UI/UX, and WordPress/SEO specialists.',
  });

  return (
    <>
      <PageHero
        eyebrow="Meet the Studio"
        title="The people behind"
        gradWord="your website."
        description="Three developers, one studio. You'll work directly with each of us throughout your project."
      />
      <TeamGrid withHeading={false} />
      <CTABanner
        title="Want to work"
        gradWord="with us?"
        description="Tell us about your project and which of our services fits best."
      />
    </>
  );
}
