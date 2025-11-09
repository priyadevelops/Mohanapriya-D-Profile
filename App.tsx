
import React from 'react';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { WorkExperience } from './components/WorkExperience';
import { Expertise } from './components/Expertise';
import { EducationAndCertifications } from './components/EducationAndCertifications';
import { Leadership } from './components/Leadership';
import { Footer } from './components/Footer';

import { 
  summaryData, 
  contactInfo, 
  workExperienceData,
  expertiseData,
  educationData,
  leadershipData,
  futurePlansData
} from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <main className="max-w-screen-xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Header contactInfo={contactInfo} />
          </div>
          <div className="lg:col-span-2 space-y-12">
            <Summary summary={summaryData} />
            <WorkExperience experiences={workExperienceData} />
            <Expertise expertise={expertiseData} />
            <EducationAndCertifications educationItems={educationData} />
            <Leadership leadershipItems={leadershipData} />
            <Footer futurePlans={futurePlansData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
