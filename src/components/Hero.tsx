import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                <span className="block">VELLANKI</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  SANTHOSH
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300 flex items-center">
                <Briefcase className="inline-block mr-2" size={20} />
                <span>Tech Enthusiast | Data Science Student</span>
              </p>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                I consider myself a responsible and orderly person. I am looking forward to my first work experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                  <ArrowRight className="ml-2" size={18} />
                </a>
                <a 
                  href="#about" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md border border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-700"
                >
                  About Me
                </a>
              </div>
              
              <div className="mt-8">
                <SocialLinks />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="C:\Users\vella\Downloads\PORT-1\PROFILE PIC.jpg" 
                alt="Vellanki Santhosh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;