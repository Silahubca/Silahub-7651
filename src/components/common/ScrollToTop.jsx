import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Update document title and meta tags for SEO
    updateMetaTags(pathname);
  }, [pathname]);

  const updateMetaTags = (path) => {
    // This will be handled by individual page components
    // But we can add global defaults here
    if (!document.querySelector('meta[name="robots"]')) {
      const robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index,follow';
      document.head.appendChild(robotsMeta);
    }
  };

  return null;
};

export default ScrollToTop;