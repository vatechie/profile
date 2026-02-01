import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PersonalInfo } from '../types';
import profileImage from '../data/profile.jpeg';

interface HomeSectionProps {
  personalInfo: PersonalInfo;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ personalInfo }) => {
  const profileInitials = personalInfo.name.split(' ').map(n => n[0]).join('').toUpperCase();
  const shouldShowInitials = !personalInfo.img;

  return (
    <section id="home" className="pt-16 pb-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-10">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            {shouldShowInitials ? (
              profileInitials
            ) : (
              <img
                src={profileImage}
                id="profile-image"
                alt={profileInitials}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = profileInitials;
                  }
                }}
              />
            )}
          </div>
          <h1 className="text-5xl sm:text-4xl font-bold text-gray-900 mb-6">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            {personalInfo.title}
          </p>
          <div className="text-lg text-gray-800 mb-12 max-w-2xxl mx-auto w-4/5">
            <p className="text-lg text-gray-600 mb-6">
              {personalInfo.aboutMe.part1}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {personalInfo.aboutMe.part2}
            </p>
          </div>
          <div className="inline-flex space-x-4">
            <a href={personalInfo.social.github} className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href={personalInfo.social.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.social.email} className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
