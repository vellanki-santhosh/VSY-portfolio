import React from 'react';
import { languages } from '../data/data';
import { Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">About Me</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full mt-2"></div>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate Data Science student with a strong foundation in programming and analytical skills. 
              Currently pursuing B-Tech with an impressive CGPA of 8.64, I am eager to apply my theoretical knowledge in practical scenarios.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My journey in technology has equipped me with skills in Python, Java, and C programming, 
              along with specialized knowledge in Data Science, Cloud Computing, and Internet of Things. 
              I am actively seeking opportunities to gain real-world experience and contribute to innovative projects.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin className="mr-2" size={20} />
                <span>Gollapudi, Vijayawada-521225</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Mail className="mr-2" size={20} />
                <a href="mailto:vellanki07@gmail.com" className="hover:text-blue-600 transition-colors duration-300">
                  vellanki07@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Phone className="mr-2" size={20} />
                <a href="tel:9133234791" className="hover:text-blue-600 transition-colors duration-300">
                  9133234791
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Languages I Speak
              </h3>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{language.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{language.level}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ 
                          width: language.level === 'Native' ? '100%' : 
                                 language.level === 'Fluent' ? '85%' : 
                                 language.level === 'Proficient' ? '100%' :  
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
