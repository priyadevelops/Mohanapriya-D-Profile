
import React from 'react';
import { LeadershipItem } from '../types';
import { Section } from './Section';
import { UsersIcon } from './Icons';

interface LeadershipProps {
  leadershipItems: LeadershipItem[];
}

export const Leadership: React.FC<LeadershipProps> = ({ leadershipItems }) => {
  return (
    <Section title="Coaching, Mentoring & Leadership" icon={<UsersIcon />}>
      <div className="space-y-6">
        {leadershipItems.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">{item.category}</h3>
            <ul className="space-y-2 list-disc list-inside text-slate-600">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
