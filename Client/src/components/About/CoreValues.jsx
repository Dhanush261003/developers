import { coreValues } from '../../data/company';
import SectionHeading from '../Common/SectionHeading';
import Reveal from '../Common/Reveal';
import './About.css';

export default function CoreValues() {
  return (
    <section className="section values-section">
      <div className="container">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Our core"
          gradWord="values."
          center
        />
        <div className="grid-4">
          {coreValues.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08}>
              <div className="value-card card">
                <span className="value-number">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
