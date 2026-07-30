import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { faqs } from '../../data/faq';
import SectionHeading from '../Common/SectionHeading';
import Reveal from '../Common/Reveal';
import './FAQ.css';

export default function FAQAccordion({ withHeading = true }) {
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <section className="section">
      <div className="container">
        {withHeading && (
          <SectionHeading
            eyebrow="Good to Know"
            title="Frequently asked"
            gradWord="questions."
            center
          />
        )}

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={i * 0.05}>
                <div className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon">
                      <FiPlus />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="faq-answer-wrap"
                      >
                        <p className="faq-answer">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
