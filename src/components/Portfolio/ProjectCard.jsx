import { FiArrowUpRight, FiClock } from 'react-icons/fi';
import Reveal from '../Common/Reveal';
import './Portfolio.css';

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="project-card card" style={{ '--project-color': project.color }}>
        <div className="project-thumb">
          <span className="project-thumb-tag">{project.category}</span>
          {project.placeholder && (
            <span className="project-soon"><FiClock /> Coming Soon</span>
          )}
          <div className="project-thumb-glow" />
          <span className="project-thumb-initial">{project.name.charAt(0)}</span>
        </div>

        <div className="project-body">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-desc">{project.description}</p>

          <div className="project-tech">
            {project.tech.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>

          <div className="project-links">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Website <FiArrowUpRight />
              </a>
            )}
            {project.caseStudy && (
              <span className="project-link muted">Case Study <FiArrowUpRight /></span>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
