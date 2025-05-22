import React, { useState } from 'react';
import { Github as GitHub, ExternalLink, Code } from 'lucide-react';
import { projects } from '../data/data';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Projects</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full mt-2"></div>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project navigation */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">My Projects</h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeProject === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    <h4 className="font-semibold">{project.title}</h4>
                    <p className={`text-sm mt-1 ${
                      activeProject === index ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {project.technologies.join(' • ')}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project details */}
          <div className="lg:w-2/3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {projects[activeProject].title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {projects[activeProject].longDescription}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Smart budget categorization based on spending patterns</li>
                    <li>Visual analytics for budget tracking and optimization</li>
                    <li>Customizable budget planning with intelligent recommendations</li>
                    <li>Expense tracking with receipt scanning capability</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {projects[activeProject].technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={projects[activeProject].githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white font-medium rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <GitHub className="mr-2" size={18} />
                    View on GitHub
                  </a>
                  
                  {projects[activeProject].demoLink && (
                    <a 
                      href={projects[activeProject].demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300"
                    >
                      <ExternalLink className="mr-2" size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-800 dark:bg-gray-900 p-6 flex items-center">
                <Code className="text-white mr-3" size={24} />
                <p className="text-white">Interested in working together? Feel free to contact me for collaborations or discussions about new projects.</p>
                <a 
                  href="#contact" 
                  className="ml-auto text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;