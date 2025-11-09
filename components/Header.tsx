
import React from 'react';
import { ContactInfo } from '../types';
import { LocationMarkerIcon, PhoneIcon, MailIcon, GlobeAltIcon, ProfileLogo } from './Icons';

interface HeaderProps {
  contactInfo: ContactInfo;
}

export const Header: React.FC<HeaderProps> = ({ contactInfo }) => {
  return (
    <header className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-slate-200/80 sticky top-8 text-center lg:text-left">
      <div className="flex flex-col items-center lg:items-start">
        <ProfileLogo />
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{contactInfo.name}</h1>
        <p className="mt-2 text-lg text-sky-600 font-semibold">{contactInfo.title}</p>
        <p className="text-md text-slate-500">{contactInfo.specialization}</p>

        <div className="mt-8 space-y-3 w-full">
          <ContactItem icon={<LocationMarkerIcon />} text={contactInfo.location} />
          <ContactItem icon={<PhoneIcon />} text={contactInfo.phone} href={`tel:${contactInfo.phone}`} />
          <ContactItem icon={<MailIcon />} text={contactInfo.email} href={`mailto:${contactInfo.email}`} />
          <ContactItem icon={<GlobeAltIcon />} text={contactInfo.linkedinHandle} href={contactInfo.linkedin} />
        </div>
      </div>
    </header>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href }) => {
  const content = (
    <div className="flex items-center justify-center lg:justify-start">
      <span className="text-slate-400">{icon}</span>
      <span className="ml-3 text-slate-600 break-all">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200 hover:text-sky-600 group"
      >
        <div className="flex items-center justify-center lg:justify-start">
            <span className="text-slate-400 group-hover:text-sky-500 transition-colors duration-200">{icon}</span>
            <span className="ml-3 text-slate-600 group-hover:text-sky-600 transition-colors duration-200 break-all">{text}</span>
        </div>
      </a>
    );
  }

  return content;
};