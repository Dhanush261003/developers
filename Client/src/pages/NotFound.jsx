import { FiArrowLeft } from 'react-icons/fi';
import Button from '../components/Common/Button';
import Reveal from '../components/Common/Reveal';
import { useSEO } from '../hooks/useSEO';
import './NotFound.css';

export default function NotFound() {
  useSEO({ title: 'Page Not Found', description: 'The page you are looking for does not exist.' });

  return (
    <section className="notfound">
      <div className="glow notfound-glow" />
      <div className="container notfound-inner">
        <Reveal>
          <span className="notfound-code">404</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="notfound-title">This page got lost in <span className="grad">deployment.</span></h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="notfound-desc">
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Button to="/" icon={FiArrowLeft}>Back to Home</Button>
        </Reveal>
      </div>
    </section>
  );
}
