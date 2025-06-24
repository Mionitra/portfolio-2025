import React, { useState } from 'react';

const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      technologies: ["React", "Django", "TailwindCSS"],
      image: "https://readdy.ai/api/search-image?query=A%20modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20showing%20product%20grid%20layout%20with%20elegant%20cards%2C%20navigation%20menu%2C%20and%20shopping%20cart%20icon.%20Minimalist%20design%20with%20soft%20shadows%20and%20subtle%20animations%2C%20professional%20UI%20design&width=600&height=400&seq=1&orientation=landscape",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      technologies: ["Vue", "Django", "TailwindCSS"],
      image: "https://readdy.ai/api/search-image?query=A%20task%20management%20application%20interface%20with%20kanban%20board%20layout%2C%20showing%20task%20cards%20in%20different%20columns%20like%20To%20Do%2C%20In%20Progress%2C%20and%20Done.%20Clean%20UI%20with%20subtle%20shadows%2C%20modern%20design%20elements%2C%20and%20a%20professional%20color%20scheme&width=600&height=400&seq=2&orientation=landscape",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Portfolio Generator",
      description: "Create beautiful portfolios with a simple interface",
      technologies: ["React", "TailwindCSS"],
      image: "https://readdy.ai/api/search-image?query=A%20portfolio%20website%20builder%20interface%20showing%20customization%20options%20and%20a%20preview%20of%20a%20professional%20portfolio%20page.%20Modern%20UI%20with%20drag%20and%20drop%20elements%2C%20color%20pickers%2C%20and%20template%20options.%20Clean%20design%20with%20professional%20layout&width=600&height=400&seq=3&orientation=landscape",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Data visualization and analytics for business metrics",
      technologies: ["Vue", "Django"],
      image: "https://readdy.ai/api/search-image?query=A%20business%20analytics%20dashboard%20with%20various%20charts%2C%20graphs%2C%20and%20data%20visualization%20elements.%20Professional%20UI%20with%20dark%20theme%2C%20showing%20metrics%2C%20KPIs%2C%20and%20interactive%20elements.%20Modern%20design%20with%20clean%20layout%20and%20information%20hierarchy&width=600&height=400&seq=4&orientation=landscape",
      liveLink: "#",
      githubLink: "#"
    }
  ];
  
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-[#1e293b]' : 'bg-[#e9ecef]'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Projects</span>
        </h2>
        
        <div className="flex justify-center mb-10 flex-wrap gap-4">
          <button 
            onClick={() => setActiveFilter('All')} 
            className={`px-6 py-2 rounded-full !rounded-button whitespace-nowrap transition-all duration-200 cursor-pointer ${activeFilter === 'All' ? 
              (darkMode ? 'bg-[#818cf8] text-white' : 'bg-[#6366f1] text-white') : 
              (darkMode ? 'bg-[#0f172a] text-[#f8fafc]' : 'bg-white text-[#1e293b]')
            }`}
          >
            All
          </button>
          
          {['React', 'Vue', 'Django', 'TailwindCSS'].map((tech, index) => (
            <button 
              key={index}
              onClick={() => setActiveFilter(tech)} 
              className={`px-6 py-2 rounded-full !rounded-button whitespace-nowrap transition-all duration-200 cursor-pointer ${activeFilter === tech ? 
                (darkMode ? 'bg-[#818cf8] text-white' : 'bg-[#6366f1] text-white') : 
                (darkMode ? 'bg-[#0f172a] text-[#f8fafc]' : 'bg-white text-[#1e293b]')
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`group rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-[#0f172a] hover:shadow-lg hover:shadow-purple-500/20' : 'bg-white hover:shadow-xl'}`}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <div className="flex gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-[#6366f1]/80 text-white text-sm rounded-full !rounded-button whitespace-nowrap">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={project.liveLink} 
                        className="px-4 py-2 bg-white text-[#1e293b] rounded-full !rounded-button whitespace-nowrap font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                      >
                        Live Preview
                      </a>
                      <a 
                        href={project.githubLink} 
                        className="px-4 py-2 bg-gray-800 text-white rounded-full !rounded-button whitespace-nowrap font-medium hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                      >
                        <i className="fab fa-github mr-2"></i>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 text-sm rounded-full !rounded-button whitespace-nowrap ${
                        darkMode ? 'bg-[#1e293b] text-[#f8fafc]' : 'bg-[#e9ecef] text-[#1e293b]'
                      }`}
                    >
                      {tech}
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

export default ProjectsSection;