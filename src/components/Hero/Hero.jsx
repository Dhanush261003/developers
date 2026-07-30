import { motion } from 'framer-motion';
import { FiArrowUpRight, FiPlay } from 'react-icons/fi';
import Button from '../Common/Button';
import Reveal from '../Common/Reveal';
import { staggerContainer, fadeUp } from '../../utils/motionVariants';
import './Hero.css';

const words = ['We Build', 'Modern Digital', 'Experiences.'];

export default function Hero() {
  return (
    <section className="hero">
      <div className="glow hero-glow-1" />
      <div className="glow hero-glow-2" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <Reveal>
          <span className="eyebrow">A Web Development Studio</span>
        </Reveal>

        <motion.h1
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12, 0.15)}
        >
          {words.map((line, i) => (
            <span className="hero-line-wrap" key={line}>
              <motion.span
                className={`hero-line ${i === 2 ? 'grad' : ''}`}
                custom={i * 0.05}
                variants={fadeUp}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <Reveal delay={0.5}>
          <p className="hero-desc">
            Developers is a 3-person studio designing and building React, WordPress
            and Framer websites for businesses who care about speed, design and
            search visibility.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="hero-actions">
            <Button to="/contact" icon={FiArrowUpRight}>Start a Project</Button>
            <Button to="/projects" variant="outline" icon={FiPlay}>View Our Work</Button>
          </div>
        </Reveal>

        <Reveal delay={0.75}>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">25+</span>
              <span className="hero-stat-label">Projects Delivered</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">18+</span>
              <span className="hero-stat-label">Happy Clients</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">95</span>
              <span className="hero-stat-label">Avg. Lighthouse Score</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
