import React, { useState } from 'react';
import { 
  Navigation, 
  HomeSection, 
  ExperienceSection, 
  EducationSection, 
  SkillsSection, 
  ContactSection, 
  Footer 
} from './components';
import { useScrollSpy } from './hooks/useScrollSpy';
import { personalInfo, experience, education, skills } from './data/portfolioData';
import './App.css';

const App: React.FC = () => {
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
      
      <HomeSection personalInfo={personalInfo} />
      <ExperienceSection experience={experience} />
      <EducationSection education={education} />
      <SkillsSection skills={skills} />
      {/* Projects section placeholder */}
      <section id="projects"></section>
      <ContactSection />
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default App;
