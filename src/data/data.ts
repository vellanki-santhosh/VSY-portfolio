import { NavItem, SocialLink, Education, Language, SkillCategory, Certification, Project, ContactInfo } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vellanki-santhosh-23hp1a4461/',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/vsy_07_/',
    icon: 'instagram',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/vellanki-santhosh',
    icon: 'github',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/VSY_07/',
    icon: 'code',
  },
];

export const educationData: Education[] = [
  {
    institution: 'Andhra Loyola Institute Of Engineering And Technology',
    degree: 'Bachelor of Technology (B.Tech)',
    status: 'Present',
    timeline: '',
    details: 'CGPA: 8.64',
  },
  {
    institution: 'Sri Chaitanya Boys Junior College, Gollapudi',
    degree: 'Intermediate',
    status: 'Completed',
    timeline: '',
    details: 'Marks: 876',
  },
  {
    institution: 'Sri Chaitanya Techno School',
    degree: 'Secondary School Certificate (SSC)',
    status: 'Completed',
    timeline: '',
    details: 'CGPA: 10',
  },
];

export const languages: Language[] = [
  { name: 'English', level: 'Proficient' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Telugu', level: 'Native' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Technical Skills',
    skills: [
      { name: 'Python Programming Language', percentage: 85 },
      { name: 'Java Programming Language', percentage: 80 },
      { name: 'C Programming Language', percentage: 75 },
      { name: 'HTML, CSS, and JavaScript', percentage: 70 },
      { name: 'Data Science', percentage: 80 },
      { name: 'Data Analysis', percentage: 85 },
      { name: 'Cloud Computing', percentage: 75 },
      { name: 'Internet of Things', percentage: 70 },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', percentage: 90 },
      { name: 'Leadership', percentage: 80 },
      { name: 'Soft Skills', percentage: 85 },
      { name: 'Technical Skills', percentage: 85 },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'NPTEL – CLOUD COMPUTING',
    issuer: 'NPTEL',
    date: 'November 2024',
    description: 'Comprehensive understanding of cloud computing principles, architectures, and implementation strategies.',
    certificateLink: '#',
  },
  {
    title: 'Data Science Internship',
    issuer: 'RINEX.AI',
    date: 'MAY 2024',
    description: 'Practical experience in data analysis, visualization, and machine learning applications.',
    certificateLink: '#',
  },
  {
    title: 'Ethical Hacking & CYBER SECURITY Workshop',
    issuer: 'Supraja Technology',
    date: 'September 2024',
    description: 'Hands-on training in ethical hacking methodologies, tools, and security assessment techniques.',
    certificateLink: '#',
  },
  {
    title: 'Affiliate Marketing and Prompt Engineering',
    issuer: 'Udemy',
    date: 'December 2024',
    description: 'Skills in digital marketing strategies and AI prompt engineering for content generation.',
    certificateLink: '#',
  },
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: 'APRIL 2025',
    description: 'Fundamental problem-solving skills using data structures and algorithms.',
    certificateLink: '#',
  },
  {
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    date: 'APRIL 2025',
    description: 'Advanced problem-solving techniques and optimization strategies.',
    certificateLink: '#',
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    date: 'APRIL 2025',
    description: 'Core Python programming skills, including syntax, data structures, and basic algorithms.',
    certificateLink: '#',
  },
  {
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    date: 'APRIL 2025',
    description: 'Fundamental Java programming concepts, including object-oriented principles.',
    certificateLink: '#',
  },
  {
    title: 'Internet of Things',
    issuer: 'EXCELR',
    date: 'APRIL 2025',
    description: 'Understanding of IoT architectures, protocols, and practical implementation of connected devices.',
    certificateLink: '#',
  },
  {
    title: 'Design Thinking and Innovation',
    issuer: 'Infosys Springboard',
    date: 'APRIL 2025',
    description: 'Creative problem-solving methodologies and innovation frameworks for product development.',
    certificateLink: '#',
  },
  {
    title: 'Project Excellence - Mastering Major and Minor Projects',
    issuer: 'EXCELR',
    date: 'MAY 2025',
    description: 'Project management methodologies with real-time case studies and practical applications.',
    certificateLink: '#',
  },
  {
    title: 'Data Analytics Internship',
    issuer: 'Techno Hacks',
    date: 'MAY 2025',
    description: 'Practical experience in data cleaning, analysis, and visualization using industry tools.',
    certificateLink: '#',
  },
];

export const projects: Project[] = [
  {
    title: 'Budget Sort',
    description: 'A comprehensive budget management application that categorizes and sorts expenses according to available funds and financial plans.',
    longDescription: 'This application helps users manage their finances by automatically categorizing expenses, setting budget limits, and providing visual analytics. It uses advanced sorting algorithms to optimize budget allocation based on priority and available funds.',
    technologies: ['HTML', 'CSS', 'JS', 'DBMS'],
    githubLink: '#',
    demoLink: '#',
  },
  {
    title: 'Indoor Navigation System',
    description: 'A system designed to provide navigation assistance inside buildings and complex structures where GPS signals are limited.',
    longDescription: 'This project implements Bluetooth beacons and advanced algorithms to provide accurate indoor positioning and navigation guidance. It includes features such as path optimization, obstacle avoidance, and real-time location tracking.',
    technologies: ['Python', 'IoT', 'Bluetooth', 'AI'],
    githubLink: '#',
  }
];

export const contactInfo: ContactInfo = {
  email: 'vellanki07@gmail.com',
  phone: '9133234791',
  location: 'Gollapudi, Vijayawada-521225',
  status: 'Currently open to job opportunities and collaborations',
};
