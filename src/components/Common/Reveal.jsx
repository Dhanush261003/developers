import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { fadeUp, fadeLeft, fadeRight, scaleIn } from '../../utils/motionVariants';

const VARIANTS = { up: fadeUp, left: fadeLeft, right: fadeRight, scale: scaleIn };

/**
 * Wraps any content with a scroll-triggered reveal animation.
 * direction: 'up' | 'left' | 'right' | 'scale'
 */
export default function Reveal({ children, direction = 'up', delay = 0, className = '', as = 'div' }) {
  const { ref, isInView } = useInView();
  const Component = motion[as] || motion.div;
  const variants = VARIANTS[direction] || fadeUp;

  return (
    <Component
      ref={ref}
      className={className}
      custom={delay}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </Component>
  );
}
