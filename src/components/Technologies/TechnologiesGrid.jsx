import * as Si from 'react-icons/si';
import { technologies } from '../../data/technologies';
import SectionHeading from '../Common/SectionHeading';
import Reveal from '../Common/Reveal';
import './Technologies.css';

export default function TechnologiesGrid({ withHeading = true }) {
  return (
    <section className="section tech-section">
      <div className="container">
        {withHeading && (
          <SectionHeading
            eyebrow="Our Toolkit"
            title="Technologies we"
            gradWord="work with."
            center
          />
        )}
        <div className="tech-grid">
          {technologies.map((tech, i) => {
            const Icon = Si[tech.icon] || Si.SiReact;
            return (
              <Reveal key={tech.id} delay={i * 0.03} direction="scale">
                <div className="tech-chip card">
                  <Icon size={26} />
                  <span>{tech.name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
