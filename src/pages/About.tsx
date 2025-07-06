import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import { useLocation } from 'react-router-dom';

const About: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <main>
        <AboutSection />
      </main>
    </div>
  );
};

export default About;
