import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { experience } from "../data/data";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development, building innovative
            solutions and gaining valuable experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experience.map((exp) => (
            <div key={exp.id} className="relative">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg h-full">
                {/* Company and Position */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg text-blue-400 font-semibold mb-2">
                    {exp.company}
                  </h4>

                  {/* Duration and Location */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <FaBriefcase className="text-blue-400" />
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-1.5 text-xs">▸</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaBriefcase />
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
