import { Link } from 'react-router-dom';

/**
 * Unified button/link component.
 * variant: 'primary' | 'outline'
 * If `to` is provided, renders a router Link; if `href`, an anchor; else a button.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = '',
  icon: Icon,
  type = 'button',
  className = '',
  ...rest
}) {
  const classes = `btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={rest.target || '_self'} rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
