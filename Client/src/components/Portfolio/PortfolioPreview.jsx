import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../../data/projects';
import SectionHeading from '../Common/SectionHeading';
import ProjectCard from './ProjectCard';
import Button from '../Common/Button';
import Reveal from '../Common/Reveal';

export default function PortfolioPreview() {
  const featured = projects.filter((p) => !p.placeholder).slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Recent Work"
          title="Projects built to"
          gradWord="perform."
          description="A selection of live websites we've designed, built and continue to maintain."
        />

        <div className="grid-3">
          {featured.map((project, i) => (
            <ProjectCard project={project} key={project.id} delay={i * 0.08} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="services-preview-cta">
            <Button to="/projects" variant="outline" icon={FiArrowUpRight}>
              View All Projects
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
