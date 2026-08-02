import * as Fi from 'react-icons/fi';
import { featuredServices } from '../../data/services';
import SectionHeading from '../Common/SectionHeading';
import Reveal from '../Common/Reveal';
import Button from '../Common/Button';
import './Services.css';

export default function ServicesPreview() {
  return (
    <section className="section services-preview">
      <div className="glow services-glow" />
      <div className="container section-inner">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built around"
          gradWord="your growth."
          description="From first line of code to ongoing maintenance, we cover the full lifecycle of a modern website."
        />

        <div className="grid-3">
          {featuredServices.map((service, i) => {
            const Icon = Fi[service.icon] || Fi.FiCode;
            return (
              <Reveal key={service.id} delay={i * 0.08}>
                <div className="service-card card">
                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-short">{service.short}</p>
                  <span className="service-link">
                    Learn more <Fi.FiArrowUpRight />
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="services-preview-cta">
            <Button to="/services" variant="outline" icon={Fi.FiArrowUpRight}>
              View All Services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
