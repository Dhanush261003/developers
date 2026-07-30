import { useState, useMemo } from 'react';
import { projects, projectFilters } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function PortfolioGrid() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="portfolio-filters" role="tablist" aria-label="Filter projects by technology">
          {projectFilters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`filter-pill ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid-3">
          {filtered.map((project, i) => (
            <ProjectCard project={project} key={project.id} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
