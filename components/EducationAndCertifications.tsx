
import React from 'react';
import { Education } from '../types';
import { Section } from './Section';
import { AcademicCapIcon } from './Icons';

interface EducationAndCertificationsProps {
  educationItems: Education[];
}

export const EducationAndCertifications: React.FC<EducationAndCertificationsProps> = ({ educationItems }) => {
  return (
    <Section title="Education & Certifications" icon={<AcademicCapIcon />}>
      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-bold text-slate-800">{item.degree}</h3>
                <p className="text-sm font-medium text-slate-500 text-right">{item.duration}</p>
            </div>
            <p className="text-md text-slate-600 font-medium">{item.institution}</p>
            <p className="mt-1 text-sm text-slate-500">{item.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
