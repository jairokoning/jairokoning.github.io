import React from 'react';
import { PROJECTS_DATA, GITHUB_ICON, EXTERNAL_LINK_ICON } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-beige">Projetos</h2>
          <p className="text-brand-beige/70 mt-4 max-w-2xl mx-auto">
            Uma seleção de trabalhos que demonstram minhas habilidades em ação.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="bg-brand-brown/10 rounded-lg overflow-hidden group transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-white hover:text-brand-beige transition-colors p-2 bg-brand-dark/50 rounded-full">
                      <EXTERNAL_LINK_ICON className="w-6 h-6" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="Repository" className="text-white hover:text-brand-beige transition-colors p-2 bg-brand-dark/50 rounded-full">
                      <GITHUB_ICON className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-beige mb-2">{project.title}</h3>
                <p className="text-brand-beige/80 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-brand-brown text-white/80 text-xs font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
