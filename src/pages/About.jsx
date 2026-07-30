import PageHero from '../components/Common/PageHero';
import StoryMission from '../components/About/StoryMission';
import CoreValues from '../components/About/CoreValues';
import TeamGrid from '../components/Team/TeamGrid';
import TechnologiesGrid from '../components/Technologies/TechnologiesGrid';
import CompanyTimeline from '../components/About/CompanyTimeline';
import CTABanner from '../components/CTA/CTABanner';
import { useSEO } from '../hooks/useSEO';

export default function About() {
  useSEO({
    title: 'About Us',
    description: 'Meet Developers — a 3-person web development studio building React, WordPress and Framer websites since 2022.',
  });

  return (
    <>
      <PageHero
        eyebrow="About Developers"
        title="A small studio,"
        gradWord="built for craft."
        description="We're three developers who believe good websites come from small teams who care about every detail — not large agencies with layers of handoffs."
      />
      <StoryMission />
      <CoreValues />
      <TeamGrid />
      <TechnologiesGrid />
      <CompanyTimeline />
      <CTABanner
        title="Want to work with"
        gradWord="a team like ours?"
        description="Reach out and tell us about your project — we reply within one business day."
      />
    </>
  );
}
