import React from 'react';
import { Code, Database, BrainCircuit, Users, Briefcase, GraduationCap, Award, Star } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      title: "Experience",
      description: "2+ years in development"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-green-600" />,
      title: "Education",
      description: "Computer Science Graduate"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Projects",
      description: "10+ Completed Projects"
    }
  ];

  const expertise = [
    {
      title: 'Development',
      icon: <Code size={24} className="text-blue-500" />,
      description: 'Proficient in C++, Python, and R Programming with a strong foundation in software development principles.',
    },
    {
      title: 'Data Analysis',
      icon: <Database size={24} className="text-green-500" />,
      description: 'Experienced in using tools like Tableau, Power BI, and MySQL for creating insightful data analyses.',
    },
    {
      title: 'Problem Solving',
      icon: <Star size={24} className="text-amber-500" />,
      description: 'Strong analytical and problem-solving skills with a focus on delivering efficient solutions.',
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A passionate developer and data enthusiast dedicated to creating impactful solutions 
            through code and analytics. Always learning and growing in both development and data analysis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;