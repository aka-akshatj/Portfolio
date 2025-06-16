import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalInfo } from "../data/data";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Name and Title */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                {personalInfo.title}
              </h2>
            </div>

            {/* Bio */}
            <p className="text-lg text-gray-400 leading-relaxed animate-slide-up">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 justify-center"
              >
                <FaDownload />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="btn-secondary inline-flex items-center gap-2 justify-center"
              >
                <FaEnvelope />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column - Image and Social Links */}
          <div className="flex flex-col items-center space-y-8">
            {/* Profile Image */}
            <div className="animate-fade-in">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl float-animation border-4 border-blue-500">
                <img
                  src="/src/assets/Akshat.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 animate-slide-up">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110 border border-slate-700"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110 border border-slate-700"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-110 border border-slate-700"
              >
                <SiLeetcode size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110 border border-slate-700"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
