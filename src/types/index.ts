export type ProjectCategory = 'all' | 'fullstack' | 'nextjs' | 'laravel' | 'ecommerce' | 'corporate';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  client: string;
  sector: string;
  url: string;
  displayUrl: string;
  year: string;
  category: ProjectCategory[];
  summary: string;
  features: string[];
  techStack: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    infrastructure: string;
    security: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  color: string;
  iconName: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    experienceYears?: number;
    level: 'Expert' | 'Advanced' | 'Proficient';
    percentage: number;
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
  badge: string;
}

export interface ClientItem {
  name: string;
  sector: string;
  country: string;
  description: string;
}
