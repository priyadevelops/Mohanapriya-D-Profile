
import React from 'react';
import { Experience } from '../types';
import { Section } from './Section';
import { BriefcaseIcon } from './Icons';

interface WorkExperienceProps {
  experiences: Experience[];
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <Section title="Work Experience" icon={<BriefcaseIcon />}>
      <div className="relative border-l-2 border-slate-200 pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-sky-500 border-4 border-white"></div>
            <p className="text-xs font-semibold uppercase text-slate-500 tracking-wider">{exp.duration}</p>
            <h3 className="text-xl font-bold text-slate-800 mt-1">{exp.role}</h3>
            <p className="text-md text-slate-600 font-medium">{exp.company}</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-slate-600">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
