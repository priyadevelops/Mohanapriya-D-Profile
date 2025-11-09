
import React from 'react';
import { ExpertiseCategory } from '../types';
import { Section } from './Section';
import { SparklesIcon } from './Icons';

interface ExpertiseProps {
  expertise: ExpertiseCategory[];
}

export const Expertise: React.FC<ExpertiseProps> = ({ expertise }) => {
  return (
    <Section title="Areas of Expertise" icon={<SparklesIcon />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {expertise.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">{category.title}</h3>
            <ul className="space-y-2 list-disc list-inside text-slate-600">
              {category.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
