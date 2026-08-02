import { useState } from 'react';
import { FiSend, FiCheck } from 'react-icons/fi';
import Reveal from '../Common/Reveal';
import './Contact.css';

const initialForm = { name: '', email: '', phone: '', service: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.';
  }
  if (!form.message.trim()) errors.message = 'Tell us a little about your project.';
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const nextErrors = validate(form);
  setErrors(nextErrors);

  if (Object.keys(nextErrors).length > 0) {
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message");
    }

    setSubmitted(true);
    setForm(initialForm);

  } catch (error) {
    console.error("Contact form error:", error);
    alert("Unable to send message. Please try again.");
  }
};

  if (submitted) {
    return (
      <Reveal>
        <div className="contact-success card">
          <div className="contact-success-icon"><FiCheck size={28} /></div>
          <h3>Message sent</h3>
          <p>Thanks for reaching out — we'll get back to you within one business day.</p>
          <button className="btn btn-outline btn-sm" onClick={() => setSubmitted(false)}>
            Send another message
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form className="contact-form card" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-invalid={!!errors.name}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="phone">Phone (optional)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 XXXXX"
            />
          </div>

          <div className="form-field">
            <label htmlFor="service">Service needed</label>
            <select id="service" name="service" value={form.service} onChange={handleChange}>
              <option value="">Select a service</option>
              <option value="react">React.js Development</option>
              <option value="wordpress">WordPress Development</option>
              <option value="framer">Framer Development</option>
              <option value="landing">Landing Page</option>
              <option value="redesign">Website Redesign</option>
              <option value="maintenance">Website Maintenance</option>
              <option value="seo">SEO Optimization</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="message">Project details</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project, timeline and budget..."
            aria-invalid={!!errors.message}
          />
          {errors.message && <span className="form-error">{errors.message}</span>}
        </div>

        <button type="submit" className="btn btn-primary contact-submit">
          <span>Send Message</span> <FiSend />
        </button>
      </form>
    </Reveal>
  );
}
