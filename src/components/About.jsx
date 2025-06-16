import { FaCode, FaUsers, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import { personalInfo, education } from "../data/data";

const About = () => {
  const highlights = [
    {
      icon: <FaCode className="text-blue-400" />,
      title: "Full Stack Development",
      description:
        "Experienced in building end-to-end web applications using modern technologies",
    },
    {
      icon: <FaLightbulb className="text-blue-400" />,
      title: "Problem Solving",
      description:
        "Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming",
    },
    {
      icon: <FaUsers className="text-blue-400" />,
      title: "Leadership",
      description:
        "Executive Head at E-Cell, fostering innovation within the student community",
    },

    {
      icon: <FaGraduationCap className="text-blue-400" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies to enhance my skill set",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">{personalInfo.about}</p>
            </div>

            {/* Education */}
            <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <FaGraduationCap className="text-blue-400" />
                Education
              </h3>
              <div>
                <h4 className="text-lg font-medium text-blue-400">
                  {education.degree}
                </h4>
                <p className="text-gray-300">{education.institution}</p>
                <p className="text-gray-400 text-sm">
                  {education.duration} • {education.status}
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600">
                <div className="text-2xl font-bold text-blue-400">2+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600">
                <div className="text-2xl font-bold text-blue-400">10+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-slate-700/50 rounded-lg p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl mt-1">{highlight.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
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

export default About;
