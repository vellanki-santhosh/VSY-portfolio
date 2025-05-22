export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  status: string;
  timeline: string;
  details: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  certificateLink: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  status: string;
}