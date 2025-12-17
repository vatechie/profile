import React from 'react';
import { Experience } from '../types';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => (
  <section id="experience" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Work Experience</h2>
      <div className="space-y-12">
        {experience.map((job, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                <a href={job.link} target="_blank" rel="noreferrer">
                  <p className="text-xl text-blue-600 font-semibold">{job.company}</p>
                </a>
              </div>
              <span className="text-gray-500 font-medium mt-2 md:mt-0">{job.period}</span>
            </div>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
