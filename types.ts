
export interface ContactInfo {
  name: string;
  title: string;
  specialization: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinHandle: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export interface ExpertiseCategory {
  title: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

export interface LeadershipItem {
  category: string;
  points: string[];
}