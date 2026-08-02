import { Link } from 'react-router-dom';
import './Logo.css';

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" onClick={onClick} aria-label="Developers — home">
      <span className="logo-mark">
        <span className="logo-bracket">&lt;</span>
        <span className="logo-slash">/</span>
        <span className="logo-bracket">&gt;</span>
      </span>
      <span className="logo-word">3 Developers</span>
    </Link>
  );
}
