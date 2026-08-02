import Reveal from './Reveal';
import './PageHero.css';

export default function PageHero({ eyebrow, title, gradWord, description }) {
  return (
    <section className="page-hero">
      <div className="glow page-hero-glow" />
      <div className="container">
        <div className="page-hero-inner">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <h1 className="page-hero-title">
              {title} {gradWord && <span className="grad">{gradWord}</span>}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.2}>
              <p className="page-hero-desc">{description}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
