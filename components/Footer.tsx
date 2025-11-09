
import React from 'react';
import { Section } from './Section';
import { FlagIcon } from './Icons';

interface FooterProps {
  futurePlans: string;
}

export const Footer: React.FC<FooterProps> = ({ futurePlans }) => {
  return (
    <Section title="Career Transition & Future Plans" icon={<FlagIcon />}>
      <p className="text-slate-600 leading-relaxed italic">
        {futurePlans}
      </p>
    </Section>
  );
};
