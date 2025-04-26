import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Hi, I'm <span className="text-blue-600">Satyam Kumar</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              A passionate developer and data enthusiast with a love for problem-solving 
              and leveraging data to make impactful decisions. I specialize in C++, Python, 
              Machine Learning, Data Analysis, and building user-centric applications.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/pic.jpg"
                alt="Satyam Kumar"
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