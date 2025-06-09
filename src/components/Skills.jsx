import { FaCode, FaTools, FaLaptopCode } from 'react-icons/fa';
import { skills } from '../data/data';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <FaCode className="text-primary-400" />,
      skills: skills["Web Development"],
      color: "from-primary-500 to-blue-600"
    },
    {
      title: "Developer Tools",
      icon: <FaTools className="text-green-400" />,
      skills: skills["Developer Tools"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Programming Languages",
      icon: <FaLaptopCode className="text-purple-400" />,
      skills: skills["Programming Languages"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build amazing digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-dark-800 rounded-lg p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <div className="text-2xl text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-dark-700/50 rounded-lg p-3 border border-dark-600 hover:border-primary-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4 ? 'bg-primary-400' : 'bg-gray-600'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Stats */}
              <div className="mt-6 pt-4 border-t border-dark-600">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Skills</span>
                  <span className="text-primary-400 font-semibold">
                    {category.skills.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">
              {skills["Web Development"].length + skills["Developer Tools"].length + skills["Programming Languages"].length}+
            </div>
            <div className="text-gray-300">Technical Skills</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">2+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">10+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-purple-600/10 rounded-lg p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
              I regularly explore new frameworks, tools, and methodologies to enhance my development skills and deliver 
              cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
