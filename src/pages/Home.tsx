import React from 'react';
import { 
  HomeSection, 
  ExperienceSection, 
  EducationSection, 
  SkillsSection,
  ProjectsSection,
  ContactSection 
} from '../components';
import { personalInfo, experience, education, skills, projects } from '../data/portfolioData';

export const Home: React.FC = () => {
  return (
    <>
      <HomeSection personalInfo={personalInfo} />
      <ExperienceSection experience={experience} />
      <EducationSection education={education} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </>
  );
};
