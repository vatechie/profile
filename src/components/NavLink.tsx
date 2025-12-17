import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  mobile = false, 
  activeSection, 
  onNavigate 
}) => (
  <button
    onClick={() => onNavigate(href)}
    className={`${
      mobile
        ? 'block w-full text-left px-4 py-2 text-lg hover:bg-blue-50 transition-colors'
        : 'px-4 py-2 rounded-lg transition-colors hover:bg-blue-50'
    } ${
      activeSection === href
        ? 'text-blue-600 font-semibold'
        : 'text-gray-700 hover:text-blue-600'
    }`}
  >
    {children}
  </button>
);
