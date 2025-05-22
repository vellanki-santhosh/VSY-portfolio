import React from 'react';
import { Heart } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { navItems } from '../data/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              VELLANKI SANTHOSH
            </h3>
            <p className="text-gray-400 mb-6">
              Data Science student with a passion for technology and innovation.
            </p>
            <SocialLinks />
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Me</h4>
            <address className="text-gray-400 not-italic space-y-2">
              <p>Gollapudi, Vijayawada-521225</p>
              <p>
                <a 
                  href="mailto:vellanki07@gmail.com" 
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  vellanki07@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:9133234791" 
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  9133234791
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} Vellanki Santhosh. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart className="mx-1 text-red-500" size={16} /> by Vellanki Santhosh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;