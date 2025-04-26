import React from 'react';
import { achievements } from '../data/achievements';
import { Award, Trophy, Medal } from 'lucide-react';

const Achievements: React.FC = () => {
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'award':
        return <Award size={size} className="text-blue-600" />;
      case 'trophy':
        return <Trophy size={size} className="text-yellow-500" />;
      case 'medal':
        return <Medal size={size} className="text-amber-500" />;
      default:
        return <Award size={size} className="text-blue-600" />;
    }
  };

  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                {getIcon(achievement.icon)}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;