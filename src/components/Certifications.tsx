import React, { useState } from 'react';
import { Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { certifications } from '../data/data';

const Certifications: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  
  const handleLoadMore = () => {
    if (visibleItems === certifications.length) {
      setVisibleItems(3);
    } else {
      setVisibleItems(certifications.length);
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Certifications</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.slice(0, visibleItems).map((cert, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <Award className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{cert.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{cert.issuer}</p>
                  </div>
                </div>
                
                <p className="text-gray-500 dark:text-gray-400 mb-4">{cert.date}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-5">{cert.description}</p>
                
                <a 
                  href={cert.certificateLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                >
                  View certificate <ExternalLink className="ml-1" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {certifications.length > 3 && (
          <div className="text-center mt-12">
            <button 
              onClick={handleLoadMore}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {visibleItems === certifications.length ? (
                <>Show Less <ChevronUp className="ml-2" size={18} /></>
              ) : (
                <>Load More <ChevronDown className="ml-2" size={18} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;