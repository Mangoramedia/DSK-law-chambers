export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyServices: string[];
  commonDocumentsNeeded: string[];
  typicalCases: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  qualifications: string;
  bio: string;
  specialties: string[];
  image: string;
  email: string;
  phone: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  summary: string;
  outcome: string;
  clientType: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  practiceArea: string;
}

export interface DueDiligenceStep {
  title: string;
  desc: string;
  documents: string[];
  riskFactor: 'Low' | 'Medium' | 'High' | 'Critical';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
