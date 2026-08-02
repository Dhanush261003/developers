import PageHero from '../components/Common/PageHero';
import FAQAccordion from '../components/FAQ/FAQAccordion';
import CTABanner from '../components/CTA/CTABanner';
import { useSEO } from '../hooks/useSEO';

export default function FAQ() {
  useSEO({
    title: 'FAQ',
    description: 'Answers to common questions about timelines, technologies, maintenance and working with Developers.',
  });

  return (
    <>
      <PageHero
        eyebrow="Common Questions"
        title="Frequently asked"
        gradWord="questions."
        description="Can't find what you're looking for? Reach out and we'll answer directly."
      />
      <FAQAccordion withHeading={false} />
      <CTABanner
        title="Still have"
        gradWord="questions?"
        description="Send us a message and we'll get back to you within one business day."
      />
    </>
  );
}
