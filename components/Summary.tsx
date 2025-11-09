
import React from 'react';
import { Section } from './Section';
import { DocumentTextIcon } from './Icons';

interface SummaryProps {
  summary: string;
}

export const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <Section title="Summary" icon={<DocumentTextIcon />}>
      <p className="text-slate-600 leading-relaxed">
        {summary}
      </p>
    </Section>
  );
};
