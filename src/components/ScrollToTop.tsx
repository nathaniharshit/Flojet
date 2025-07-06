import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Smoothly scrolls to the top of the page on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
