import React, { useState } from 'react';
import { Navigation, Footer } from './index';
import { PersonalInfo } from '../types';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface LayoutProps {
  children: React.ReactNode;
  personalInfo: PersonalInfo;
}

export const Layout: React.FC<LayoutProps> = ({ children, personalInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, isHomeImageVisible, scrollToSection } = useScrollSpy();

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        personalInfo={personalInfo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        isHomeImageVisible={isHomeImageVisible}
        scrollToSection={handleScrollToSection}
      />
      {children}
      <Footer personalInfo={personalInfo} />
    </div>
  );
};
