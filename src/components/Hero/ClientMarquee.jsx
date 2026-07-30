import { clientLogos } from '../../data/company';
import Reveal from '../Common/Reveal';
import './ClientMarquee.css';

export default function ClientMarquee() {
  const loop = [...clientLogos, ...clientLogos];

  return (
    <section className="marquee-section">
      <div className="container">
        <Reveal>
          <p className="marquee-label">Trusted by growing businesses</p>
        </Reveal>
      </div>
      <div className="marquee-track-wrap">
        <div className="marquee-track">
          {loop.map((name, i) => (
            <span className="marquee-item" key={`${name}-${i}`}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
