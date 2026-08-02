import { useRef } from 'react';
import { useInView as useFramerInView } from 'framer-motion';

/**
 * Thin wrapper around framer-motion's useInView with sensible defaults
 * for one-time scroll-reveal animations across the site.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, {
    once: true,
    margin: '-80px 0px -80px 0px',
    ...options,
  });
  return { ref, isInView };
}
