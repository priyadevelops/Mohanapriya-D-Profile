
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children, icon }) => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-slate-200/80">
      <div className="flex items-center mb-6">
        {icon && <div className="text-sky-500 mr-4">{icon}</div>}
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};
