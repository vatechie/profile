import React from 'react';
import { SkillGroup } from '../types';

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => (
  <section id="skills" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>
            <div className="space-y-3">
              {skillGroup.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center justify-between">
                  <span className="text-gray-700">{skill.name}</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
