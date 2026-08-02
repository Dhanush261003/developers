import PageHero from '../components/Common/PageHero';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import { useSEO } from '../hooks/useSEO';
import '../components/Contact/Contact.css';

export default function Contact() {
  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with Developers to start your React, WordPress or Framer website project.',
  });

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about your"
        gradWord="next project."
        description="Fill out the form or reach us directly — we typically reply within one business day."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-layout">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
