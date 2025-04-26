import React from 'react';
import { Linkedin, Github as GitHub, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-8">Satyam Kumar</div>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://linkedin.com/in/satyam-kumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/satyam-kumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="mailto:satyamprasadsingh55@gmail.com"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+918405012516"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">satyamprasadsingh55@gmail.com | +91-8405012516</p>
            <p>© {currentYear} Satyam Kumar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;