import * as Fi from 'react-icons/fi';
import { services } from '../../data/services';
import Reveal from '../Common/Reveal';
import Button from '../Common/Button';
import './ServicesList.css';

export default function ServicesList() {
  return (
    <section className="section services-list">
      <div className="container">
        {services.map((service, i) => {
          const Icon = Fi[service.icon] || Fi.FiCode;
          const reverse = i % 2 === 1;
          return (
            <Reveal key={service.id} delay={0.05}>
              <div className={`service-row ${reverse ? 'reverse' : ''}`} id={service.id}>
                <div className="service-row-visual">
                  <div className="service-visual-icon">
                    <Icon size={40} />
                  </div>
                  <div className="service-visual-grid" aria-hidden="true" />
                </div>

                <div className="service-row-content">
                  <span className="tag">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="service-row-title">{service.title}</h3>
                  <p className="service-row-desc">{service.description}</p>

                  <ul className="service-benefits">
                    {service.benefits.map((b) => (
                      <li key={b}>
                        <Fi.FiCheck /> <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-tech-tags">
                    {service.technologies.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>

                  <Button to="/contact" variant="outline" size="sm" icon={Fi.FiArrowUpRight}>
                    Get a Quote
                  </Button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
