import PageHero from '../components/Common/PageHero';
import { useSEO } from '../hooks/useSEO';
import './Legal.css';

export default function PrivacyPolicy() {
  useSEO({ title: 'Privacy Policy', description: 'Privacy Policy for the Developers website.' });

  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy" gradWord="Policy." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container legal-content">
          <p>
            We collect only the information you voluntarily submit through our contact
            form — your name, email, phone number, and project details — solely to
            respond to your enquiry. We do not sell or share this information with
            third parties.
          </p>
          <h3>Cookies &amp; Analytics</h3>
          <p>
            We may use basic analytics to understand site usage and improve
            performance. No personally identifiable data is used for advertising.
          </p>
          <h3>Contact</h3>
          <p>
            Questions about this policy can be sent to hello@developers.studio.
          </p>
        </div>
      </section>
    </>
  );
}
