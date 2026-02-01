import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PersonalInfo } from '../types';

interface FooterProps {
  personalInfo: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personalInfo }) => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-gray-400 mb-4">
          © 2024 {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={personalInfo.social.email} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
