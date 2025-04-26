import React from 'react';
import { skills } from '../data/skills';
import { 
  Code, FileCode, Database, BarChart, PieChart, 
  Table, Puzzle, Users, RefreshCw, Search
} from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'code':
        return <Code size={size} />;
      case 'file-code':
        return <FileCode size={size} />;
      case 'database':
        return <Database size={size} />;
      case 'bar-chart':
        return <BarChart size={size} />;
      case 'pie-chart':
        return <PieChart size={size} />;
      case 'table':
        return <Table size={size} />;
      case 'puzzle':
        return <Puzzle size={size} />;
      case 'users':
        return <Users size={size} />;
      case 'refresh-cw':
        return <RefreshCw size={size} />;
      case 'search':
        return <Search size={size} />;
      default:
        return <Code size={size} />;
    }
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                {skillCategory.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {skillCategory.items.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-3">
                      <span className="text-blue-600">
                        {getIcon(skill.icon)}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-800">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;