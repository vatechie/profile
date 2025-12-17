import React from 'react';
import { Education } from '../types';

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => (
  <section id="education" className="py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                <a href={edu.link} target="_blank" rel="noreferrer">
                  <p className="text-xl text-blue-600 font-semibold">{edu.school}</p>
                </a>
              </div>
              <span className="text-gray-500 font-medium mt-2 md:mt-0">{edu.period}</span>
            </div>
            <p className="text-gray-600">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
