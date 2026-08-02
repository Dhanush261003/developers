import PageHero from '../components/Common/PageHero';
import { useSEO } from '../hooks/useSEO';
import './Legal.css';

export default function Terms() {
  useSEO({ title: 'Terms of Service', description: 'Terms of Service for engaging Developers.' });

  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of" gradWord="Service." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container legal-content">
          <p>
            By engaging Developers for a project, you agree to the scope, timeline
            and payment terms outlined in your project proposal. Revisions outside
            the agreed scope may incur additional cost.
          </p>
          <h3>Ownership</h3>
          <p>
            Full ownership of the final website transfers to the client upon
            completion of payment, excluding any third-party licensed assets.
          </p>
          <h3>Maintenance</h3>
          <p>
            Ongoing maintenance is optional and billed separately under a
            monthly plan.
          </p>
        </div>
      </section>
    </>
  );
}
