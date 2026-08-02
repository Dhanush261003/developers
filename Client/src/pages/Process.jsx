import PageHero from '../components/Common/PageHero';
import ProcessTimeline from '../components/Process/ProcessTimeline';
import CTABanner from '../components/CTA/CTABanner';
import { useSEO } from '../hooks/useSEO';

export default function Process() {
  useSEO({
    title: 'Our Process',
    description: 'From requirement gathering to deployment and maintenance — see the 7-stage process behind every Developers project.',
  });

  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="A process built for"
        gradWord="predictability."
        description="No surprises, no scope creep. Here's exactly how a project moves from first call to launch — and beyond."
      />
      <ProcessTimeline withHeading={false} />
      <CTABanner
        title="Ready to start"
        gradWord="stage one?"
        description="Book a discovery call and we'll walk you through the full process for your project."
      />
    </>
  );
}
