import { FaExternalLinkAlt, FaGithub, FaCode, FaStar } from 'react-icons/fa';
import { projects } from '../data/data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-dark-900 rounded-lg overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-500/20 to-purple-600/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaCode className="text-6xl text-primary-400/50" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <FaStar className="text-xs" />
                    Featured
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-400 text-xs flex items-start gap-2">
                        <span className="text-primary-400 mt-1 text-xs">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary-500/10 text-primary-400 px-2 py-1 rounded-md text-xs font-medium border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-500/10 to-purple-600/10 rounded-lg p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub for more projects and contributions to open source.
            </p>
            <a
              href="https://github.com/aka-akshatj"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaGithub />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
