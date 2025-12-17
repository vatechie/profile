import { useState, useEffect } from 'react';

const SECTIONS = ['home', 'experience', 'education', 'skills', 'projects', 'contact'];

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isHomeImageVisible, setIsHomeImageVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Check if home section image is visible
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeImage = homeSection.querySelector('#profile-image');
        if (homeImage) {
          const imageRect = homeImage.getBoundingClientRect();
          setIsHomeImageVisible(imageRect.top < window.innerHeight && imageRect.bottom > 0);
        }
      }

      for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { activeSection, isHomeImageVisible, scrollToSection };
};
