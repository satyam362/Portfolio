import React from 'react';
import { certifications } from '../data/certifications';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg border border-gray-100"
            >
              <div className="h-36 overflow-hidden">
                <img 
                  src={cert.logo} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <Award size={18} className="text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-800 line-clamp-1">{cert.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  {cert.issuer} • {cert.date}
                </p>
                <a 
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-full mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;