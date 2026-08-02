import { FiArrowUpRight } from 'react-icons/fi';
import Button from '../Common/Button';
import Reveal from '../Common/Reveal';
import './CTA.css';

export default function CTABanner({
  eyebrow = 'Ready When You Are',
  title = 'Let\u2019s build your',
  gradWord = 'next website.',
  description = 'Tell us about your project and we\u2019ll get back to you within one business day with a clear plan and quote.',
}) {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal>
          <div className="cta-banner">
            <div className="glow cta-glow" />
            <div className="cta-content">
              <span className="eyebrow">{eyebrow}</span>
              <h2 className="cta-title">
                {title} <span className="grad">{gradWord}</span>
              </h2>
              <p className="cta-desc">{description}</p>
              <div className="cta-actions">
                <Button to="/contact" icon={FiArrowUpRight}>Start a Project</Button>
                <Button to="/projects" variant="outline">See Our Work</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
