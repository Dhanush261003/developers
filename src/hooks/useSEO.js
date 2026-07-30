import { useEffect } from 'react';

/**
 * Sets document title and meta description for the current page.
 * Lightweight alternative to react-helmet for this project's scope.
 */
export function useSEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Developers` : 'Developers — We Build Modern Digital Experiences';
    document.title = fullTitle;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
