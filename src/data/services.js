export const services = [
  {
    id: 'react-development',
    title: 'React.js Website Development',
    icon: 'FiCode',
    short: 'Fast, component-driven web apps built on React 19.',
    description:
      'We engineer scalable React applications with clean architecture, reusable components, and state management that keeps your product easy to extend as it grows.',
    benefits: [
      'Component-driven, reusable architecture',
      'Optimized rendering & code-splitting',
      'SEO-friendly with SSR/SSG options',
      'Scales cleanly as your product grows',
    ],
    technologies: ['React', 'Vite', 'Next.js', 'Redux', 'Tailwind'],
    image: 'react',
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Website Development',
    icon: 'FiLayout',
    short: 'Custom WordPress builds for business, corporate & recruitment sites.',
    description:
      'From Elementor-driven business sites to custom themes, we build WordPress websites that are fast, editable by your team, and easy to maintain long-term.',
    benefits: [
      'Custom Elementor & theme development',
      'Editable, non-technical CMS workflow',
      'Speed & Core Web Vitals optimization',
      'Ongoing maintenance & support plans',
    ],
    technologies: ['WordPress', 'Elementor', 'PHP', 'MySQL'],
    image: 'wordpress',
  },
  {
    id: 'framer-development',
    title: 'Framer Website Development',
    icon: 'FiFeather',
    short: 'No-code-powered sites with hand-tuned interactions.',
    description:
      'We design and build in Framer for teams who want a beautiful, fast-launching site with best-in-class animation and easy in-house editing.',
    benefits: [
      'Rapid design-to-launch workflow',
      'Best-in-class built-in animation',
      'CMS collections for blogs & case studies',
      'Effortless client-side editing',
    ],
    technologies: ['Framer', 'CMS', 'Motion'],
    image: 'framer',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    icon: 'FiTarget',
    short: 'Conversion-focused pages for campaigns & product launches.',
    description:
      'High-converting landing pages built around a single goal — signups, sales, or leads — with copy, layout, and motion tuned for conversion.',
    benefits: [
      'Conversion-first layout & copy',
      'A/B test-friendly structure',
      'Sub-second load times',
      'Mobile-first responsive design',
    ],
    technologies: ['React', 'Framer Motion', 'Analytics'],
    image: 'landing',
  },
  {
    id: 'business-websites',
    title: 'Business Websites',
    icon: 'FiBriefcase',
    short: 'Professional multi-page sites that build trust.',
    description:
      'Complete business websites — About, Services, Team, Contact — designed to represent your brand credibly and convert visitors into enquiries.',
    benefits: [
      'Full multi-page site architecture',
      'Brand-aligned visual system',
      'Contact & enquiry integrations',
      'Google Maps & business info built-in',
    ],
    technologies: ['React', 'WordPress', 'SEO'],
    image: 'business',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    icon: 'FiRefreshCw',
    short: 'Modernize outdated sites without losing your rankings.',
    description:
      'We audit your existing site, then rebuild it with modern UI, faster performance, and improved structure — while carefully preserving your SEO equity.',
    benefits: [
      'Full UX & performance audit',
      'SEO-safe migration process',
      'Modern, on-brand visual refresh',
      'Improved conversion pathways',
    ],
    technologies: ['React', 'WordPress', 'Figma'],
    image: 'redesign',
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    icon: 'FiTool',
    short: 'Ongoing updates, monitoring & support plans.',
    description:
      'Keep your website secure, fast, and up to date with our monthly maintenance plans — covering updates, backups, monitoring, and content changes.',
    benefits: [
      'Regular updates & security patches',
      'Uptime & performance monitoring',
      'Scheduled backups',
      'Priority support turnaround',
    ],
    technologies: ['WordPress', 'React', 'Monitoring'],
    image: 'maintenance',
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    icon: 'FiTrendingUp',
    short: 'Technical & on-page SEO that drives organic traffic.',
    description:
      'We optimize site structure, metadata, performance, and content signals so search engines — and your customers — find you faster.',
    benefits: [
      'Technical SEO audits',
      'On-page metadata & schema markup',
      'Core Web Vitals improvements',
      'Ongoing keyword tracking',
    ],
    technologies: ['SEO', 'Analytics', 'Search Console'],
    image: 'seo',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'FiPenTool',
    short: 'Interfaces designed around real user behaviour.',
    description:
      'From wireframes to polished UI kits, we design interfaces that are intuitive, accessible, and aligned with your brand identity.',
    benefits: [
      'User research & wireframing',
      'Design systems & UI kits',
      'Accessibility-first design',
      'Prototyping & usability testing',
    ],
    technologies: ['Figma', 'Design Systems'],
    image: 'uiux',
  },
  {
    id: 'speed-optimization',
    title: 'Website Speed Optimization',
    icon: 'FiZap',
    short: 'Faster load times, better rankings, happier users.',
    description:
      'We diagnose performance bottlenecks and optimize images, code, and delivery so your site loads fast on any device or network.',
    benefits: [
      'Image & asset optimization',
      'Lazy loading & code-splitting',
      'CDN & caching strategy',
      'Lighthouse score improvements',
    ],
    technologies: ['Vite', 'CDN', 'Lighthouse'],
    image: 'speed',
  },
];

export const featuredServices = services.slice(0, 6);
