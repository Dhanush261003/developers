import { FaWhatsapp } from 'react-icons/fa';
import { company } from '../../data/company';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
