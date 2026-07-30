# Developers — Web Development Agency Website

A modern, premium, fully responsive marketing website for **Developers**, a
3-person web development studio, built with React 19 + Vite.

## Tech Stack

- React 19 + Vite
- React Router DOM (client-side routing)
- Framer Motion (scroll reveals, page/menu animations)
- Swiper.js (testimonials slider)
- React Icons (Feather + Simple Icons)
- Plain CSS with CSS custom properties (dark theme design system)

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
├── assets/            # images, logos, icons
├── components/
│   ├── Navbar/         Sticky, scroll-aware nav with mobile menu
│   ├── Hero/            Home hero + client logo marquee
│   ├── About/           Story, mission/vision, values, timeline, stats, why-us
│   ├── Services/        Service preview grid + full service detail rows
│   ├── Process/         Animated vertical process timeline
│   ├── Portfolio/       Project card, home preview, filterable grid
│   ├── Technologies/    Tech stack grid
│   ├── Team/             Team member cards
│   ├── Testimonials/    Swiper-based testimonial slider
│   ├── FAQ/               Accordion
│   ├── Contact/          Form (with validation) + info panel + map
│   ├── CTA/               Reusable call-to-action banner
│   ├── Footer/            Site footer
│   └── Common/           Reveal, Button, SectionHeading, Logo, PageHero,
│                          WhatsAppButton, ScrollToTop
├── pages/              One file per route (see below)
├── data/                Services, projects, team, testimonials, FAQ,
│                        process steps, technologies, company info — all
│                        content lives here, not hardcoded in components
├── hooks/               useInView, useCounter, useSEO
├── utils/               Framer Motion animation variants
├── App.jsx              Route definitions
└── main.jsx              App entry point (Router + StrictMode)
```

## Pages & Routes

| Route              | Page          |
|---------------------|---------------|
| `/`                 | Home          |
| `/about`            | About         |
| `/services`         | Services      |
| `/projects`         | Projects      |
| `/process`          | Process       |
| `/team`             | Team          |
| `/testimonials`     | Testimonials  |
| `/faq`              | FAQ           |
| `/contact`          | Contact       |
| `/privacy-policy`   | Privacy Policy|
| `/terms`            | Terms         |
| `*`                 | 404           |

## Design System

Dark theme, tokens defined as CSS custom properties in `src/index.css`:

- Background `#070B14` · Cards `#111827` · Accent `#3B82F6` → `#06B6D4`
- Text `#FFFFFF` / Secondary `#94A3B8`
- 20px border radius, glassmorphism cards, gradient buttons, glow accents

## Content

All copy and data (services, the 3 live projects, team bios, testimonials,
FAQs, and the 7-stage process) live in `src/data/*.js` so they can be edited
without touching component code. The two placeholder portfolio cards
(React / Framer) are ready to be swapped for real projects as they ship.

## Notes

- The contact form validates client-side and shows a success state; wire it
  up to your backend/email service of choice (e.g. Formspree, EmailJS, or a
  custom API route) inside `src/components/Contact/ContactForm.jsx`.
- Replace the Google Maps embed URL and social links in `src/data/company.js`
  with your real ones before deploying.
- WhatsApp number and contact details also live in `src/data/company.js`.
