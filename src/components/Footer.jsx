import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { personalInfo, achievements } from "../data/data";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      {/* Achievements Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-center"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                {achievement.title}
              </h4>
              <p className="text-blue-400 text-sm font-medium mb-1">
                {achievement.organization}
              </p>
              <p className="text-gray-400 text-xs">{achievement.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left - Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-gray-400 text-sm">
                Building digital experiences with passion and precision
              </p>
            </div>

            {/* Center - Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>

            {/* Right - Back to Top */}
            <div className="text-center md:text-right">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                aria-label="Back to top"
              >
                <span className="text-sm">Back to top</span>
                <FaArrowUp className="transform group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              © {currentYear} {personalInfo.name}. Made with{" "}
              <FaHeart className="text-red-500 animate-pulse" /> using React &
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
