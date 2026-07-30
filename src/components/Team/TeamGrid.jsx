import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { team } from '../../data/team';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';
import './Team.css';

export default function TeamGrid({ withHeading = true }) {
  return (
    <section className="section">
      <div className="container">
        {withHeading && (
          <SectionHeading
            eyebrow="The Studio"
            title="Three developers."
            gradWord="One studio."
            description="Small enough that you talk to the people actually building your site."
            center
          />
        )}

        <div className="grid-3">
          {team.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.1}>
              <div className="team-card card">
                <div className="team-photo">
                  <span>{member.initials}</span>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>

                <div className="team-skills">
                  {member.skills.map((s) => (
                    <span className="tag" key={s}>{s}</span>
                  ))}
                </div>

                <div className="team-links">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`}>
                    <FiLinkedin />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on GitHub`}>
                    <FiGithub />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
