
import { useState, useEffect } from 'react';

export const useScrollSection = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'blog', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px',
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
};
