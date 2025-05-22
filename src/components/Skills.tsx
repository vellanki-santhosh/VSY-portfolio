import React, { useEffect, useState } from 'react';
import { skillCategories } from '../data/data';

const Skills: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div id="skills-section" className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">My Skills</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: visible ? `${skill.percentage}%` : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Why My Skills Matter
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            My balanced combination of technical expertise and soft skills allows me to not only solve complex problems 
            but also communicate effectively and work collaboratively in team environments. I am constantly learning 
            and improving these skills to stay current with industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;