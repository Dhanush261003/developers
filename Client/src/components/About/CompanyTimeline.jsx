import { timeline } from '../../data/company';
import SectionHeading from '../Common/SectionHeading';
import Reveal from '../Common/Reveal';
import './About.css';

export default function CompanyTimeline() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our Journey"
          title="Company"
          gradWord="timeline."
          center
        />
        <div className="company-timeline">
          {timeline.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="company-timeline-item">
                <span className="company-timeline-year">{item.year}</span>
                <div className="company-timeline-body">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
