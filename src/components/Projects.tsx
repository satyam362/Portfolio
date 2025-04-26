import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projects[0].id);

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Project navigation */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {projects.map((project) => (
                <button
                  key={project.id}
                  className={`w-full text-left px-6 py-4 border-b border-gray-200 transition-colors duration-300 ${
                    activeProject === project.id
                      ? 'bg-blue-50 border-l-4 border-l-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveProject(project.id)}
                >
                  <h3 className="font-medium text-lg text-gray-800">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Project details */}
          <div className="md:w-2/3">
            {projects
              .filter((project) => project.id === activeProject)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500"
                >
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-600"
                          >
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Project Button (as link) */}
                    <div className="flex justify-end">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        <span className="mr-2">View Project</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
