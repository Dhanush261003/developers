import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { company } from '../../data/company';
import Reveal from '../Common/Reveal';
import './Contact.css';

const items = [
  { icon: FiMail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: FiPhone, label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
  { icon: FiMapPin, label: 'Address', value: company.address, href: null },
];

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <Reveal direction="left">
        <div className="contact-info-list">
          {items.map((item) => (
            <div className="contact-info-item" key={item.label}>
              <div className="contact-info-icon"><item.icon /></div>
              <div>
                <p className="contact-info-label">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="contact-info-value">{item.value}</a>
                ) : (
                  <p className="contact-info-value">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal direction="left" delay={0.15}>
        <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline contact-whatsapp">
          <FaWhatsapp /> <span>Chat on WhatsApp</span>
        </a>
      </Reveal>

      <Reveal direction="left" delay={0.25}>
        <div className="contact-socials">
          <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={company.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </Reveal>

      <Reveal direction="left" delay={0.35}>
        <div className="contact-map">
          <iframe
            title="Studio location"
            src={company.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </div>
  );
}
