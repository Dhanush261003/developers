import Hero from '../components/Hero/Hero';
import ClientMarquee from '../components/Hero/ClientMarquee';
import ServicesPreview from '../components/Services/ServicesPreview';
import WhyChooseUs from '../components/About/WhyChooseUs';
import PortfolioPreview from '../components/Portfolio/PortfolioPreview';
import StatsBar from '../components/About/StatsBar';
import TestimonialsSlider from '../components/Testimonials/TestimonialsSlider';
import CTABanner from '../components/CTA/CTABanner';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Modern Web Development Agency',
    description:
      'Developers is a React, WordPress and Framer web development studio building fast, SEO-friendly websites for growing businesses.',
  });

  return (
    <>
      <Hero />
      <ClientMarquee />
      <ServicesPreview />
      <StatsBar />
      <WhyChooseUs />
      <PortfolioPreview />
      <TestimonialsSlider />
      <CTABanner />
    </>
  );
}
