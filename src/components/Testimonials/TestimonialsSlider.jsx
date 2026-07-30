import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import { testimonials } from '../../data/testimonials';
import SectionHeading from '../Common/SectionHeading';
import Reveal from '../Common/Reveal';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

export default function TestimonialsSlider({ withHeading = true }) {
  return (
    <section className="section testimonials-section">
      <div className="glow testimonials-glow" />
      <div className="container section-inner">
        {withHeading && (
          <SectionHeading
            eyebrow="Client Feedback"
            title="Don't just take"
            gradWord="our word for it."
            center
          />
        )}

        <Reveal delay={0.15}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1080: { slidesPerView: 3 } }}
            className="testimonials-swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="testimonial-card card">
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FiStar key={i} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div>
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-role">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
