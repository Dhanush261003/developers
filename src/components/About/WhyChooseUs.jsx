import * as Fi from 'react-icons/fi';
import { whyChooseUs } from '../../data/company';
import SectionHeading from '../Common/SectionHeading';
import Reveal from '../Common/Reveal';
import './About.css';

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="glow why-glow" />
      <div className="container section-inner">
        <SectionHeading
          eyebrow="Why Us"
          title="Why teams choose"
          gradWord="Developers."
        />
        <div className="grid-4">
          {whyChooseUs.map((item, i) => {
            const Icon = Fi[item.icon] || Fi.FiCheck;
            return (
              <Reveal key={item.id} delay={i * 0.08}>
                <div className="why-card card">
                  <div className="mv-icon"><Icon size={20} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
