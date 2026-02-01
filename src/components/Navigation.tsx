import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { PersonalInfo } from '../types';
import profileImage from '../data/profile.jpeg';

interface NavigationProps {
  personalInfo: PersonalInfo;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  isHomeImageVisible: boolean;
  scrollToSection: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  personalInfo,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  isHomeImageVisible,
  scrollToSection,
}) => {
  const profileInitials = personalInfo.name.split(' ').map(n => n[0]).join('').toUpperCase();
  const shouldShowInitials = !personalInfo.img;

  const navItems = ['home', 'experience', 'education', 'skills', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center"
          >
            {!isHomeImageVisible && (
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold overflow-hidden">
                  {shouldShowInitials ? (
                    profileInitials
                  ) : (
                    <img
                      src={profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
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
                <div className="text-2xl font-bold text-gray-900">
                  {personalInfo.name}
                </div>
              </div>
            )}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map(item => (
              <NavLink 
                key={item} 
                href={item} 
                activeSection={activeSection}
                onNavigate={scrollToSection}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-2">
              {navItems.map(item => (
                <NavLink 
                  key={item} 
                  href={item} 
                  mobile 
                  activeSection={activeSection}
                  onNavigate={scrollToSection}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
