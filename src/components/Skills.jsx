import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import javascriptLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import sassLogo from "../assets/sass.png";
import nextjsLogo from "../assets/nextjs.png";
import gitLogo from "../assets/git.png";
import figmaLogo from "../assets/figma.png";

const skills = [
  { name: "HTML", image: htmlLogo },
  { name: "CSS", image: cssLogo },
  { name: "JavaScript", image: javascriptLogo },
  { name: "React", image: reactLogo },
  { name: "Tailwind CSS", image: tailwindLogo },
  { name: "Sass", image: sassLogo },
  { name: "Nextjs", image: nextjsLogo },
  { name: "Git", image: gitLogo },
  { name: "Figma", image: figmaLogo },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 md:py-20 lg:py-20 bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      <div className="background-filter"></div>
      <div className="sectionskills container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="title-night text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 md:mb-16 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
          Compétences
        </h2>
        

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white/8 via-white/5 to-white/8 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-6 md:p-8 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/15 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 mx-auto transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                <h3 className="text-white font-medium text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-16 bg-gradient-to-r from-purple-500/8 via-blue-500/8 to-purple-500/8 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 sm:p-8 md:p-8 hover:bg-gradient-to-r hover:from-purple-500/15 hover:via-blue-500/15 hover:to-purple-500/15 transition-all duration-300 shadow-md shadow-purple-500/10">
          <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center justify-center mb-6 md:mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3 animate-pulse"></span>
            Compétences en développement
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
            {["TypeScript", "Vite", "GitHub", "Responsive Design", "API REST", "Context API"].map((tech, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white px-4 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
