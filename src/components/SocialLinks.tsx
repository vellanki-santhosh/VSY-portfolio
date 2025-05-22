import React from 'react';
import { Github as GitHub, Linkedin, Instagram, Code } from 'lucide-react';
import { socialLinks } from '../data/data';

const iconComponents: Record<string, React.FC<{ size?: number, className?: string }>> = {
  github: GitHub,
  linkedin: Linkedin,
  instagram: Instagram,
  code: Code,
};

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => {
        const IconComponent = iconComponents[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-blue-400"
            aria-label={link.name}
          >
            {IconComponent && <IconComponent size={18} />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;