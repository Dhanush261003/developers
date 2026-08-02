import * as Fi from 'react-icons/fi';
import { processSteps } from '../../data/process';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';
import './Process.css';

export default function ProcessTimeline({ withHeading = true }) {
  return (
    <section className="section process-section">
      <div className="container">
        {withHeading && (
          <SectionHeading
            eyebrow="How We Work"
            title="A clear process, from"
            gradWord="brief to launch."
            description="Seven stages keep every project predictable — for you and for us."
          />
        )}

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          {processSteps.map((step, i) => {
            const Icon = Fi[step.icon] || Fi.FiCircle;
            return (
              <Reveal key={step.id} delay={i * 0.06} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content card">
                    <span className="timeline-number">{step.number}</span>
                    <h3 className="timeline-title">{step.title}</h3>
                    <p className="timeline-desc">{step.description}</p>
                  </div>
                  <div className="timeline-dot">
                    <Icon size={16} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
