import { FiTarget, FiEye } from 'react-icons/fi';
import Reveal from '../Common/Reveal';
import './About.css';

export default function StoryMission() {
  return (
    <section className="section">
      <div className="container">
        <div className="story-layout">
          <Reveal direction="left">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="section-title" style={{ marginTop: 8 }}>
                Started as three freelancers.<br />
                <span className="grad">Now a full studio.</span>
              </h2>
              <p className="story-text">
                Developers began in 2022 when three developers, each freelancing
                on WordPress and frontend projects, started collaborating on
                larger client work. What started as shared referrals became a
                formal studio focused on React, WordPress, and Framer builds
                for businesses that needed more than a template.
              </p>
              <p className="story-text">
                Today we take on a small number of projects at a time so every
                client gets direct access to the people actually writing the
                code — not an account manager relaying messages.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="mission-vision-stack">
              <div className="mv-card card">
                <div className="mv-icon"><FiTarget size={22} /></div>
                <h3>Our Mission</h3>
                <p>Help businesses create modern, responsive, SEO-friendly websites that earn trust and convert visitors.</p>
              </div>
              <div className="mv-card card">
                <div className="mv-icon"><FiEye size={22} /></div>
                <h3>Our Vision</h3>
                <p>To be the studio growing businesses call first when their website needs to work as hard as they do.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
