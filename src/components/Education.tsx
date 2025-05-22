import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/data';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Education</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full mt-2"></div>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

            {/* Education items */}
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800"></div>
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 
                    ? 'md:pr-16 md:pl-4' 
                    : 'md:pl-16 md:pr-4'
                }`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="text-blue-600 mr-2" size={24} />
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.degree}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium">{item.institution}</p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="mr-1" size={16} />
                      <span>{item.status}</span>
                    </div>
                    <div className="flex items-center text-blue-600 dark:text-blue-400">
                      <Award className="mr-1" size={16} />
                      <span>{item.details}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;