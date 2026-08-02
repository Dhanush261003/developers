import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, gradWord, description, center = false }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="section-title">
          {title} {gradWord && <span className="grad">{gradWord}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="section-desc">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
