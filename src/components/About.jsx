import { motion } from "framer-motion";
import codingnight from "../images/codingnight.avif";

const About = () => {
  return (
    <section
      id="about"
      className="about-section w-full h-auto py-20 md:py-20 lg:py-20 bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white sm:pl-10"
    >
      <div className="w-full px-2 max-w-6xl mx-auto">
        <h2 className="title-night text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 md:mb-16 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
          À propos
        </h2>

        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="relative"
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <div className="relative mb-10">
              <img
                src={codingnight}
                alt="About me"
                className="rounded-full mx-auto h-56 sm:h-64 md:h-72 w-auto shadow-2xl lg:h-96 lg:min-w-72 border-4 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse"
              />

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl -z-10 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-600/20 blur-2xl -z-20"></div>

              <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-75"></div>
              <div className="absolute -bottom-4 -left-3 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-150"></div>
              <div className="absolute top-1/4 -right-4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-300"></div>

              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/50 animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>
            </div>
          </motion.div>

          <div className="md:w-full w-full p-4 md:py-12">
            <div className="text-base w-[90%] mx-auto md:text-lg lg:text-xl leading-relaxed mb-8 space-y-8 md:space-y-8">
              <div className="bg-gradient-to-r from-blue-500/8 via-cyan-500/8 to-blue-500/8 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:bg-gradient-to-r hover:from-blue-500/15 hover:via-cyan-500/15 hover:to-blue-500/15 transition-all duration-300 shadow-md shadow-blue-500/10">
                <h3 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 animate-pulse"></span>
                  Objectif professionnel
                  <span className="ml-3 text-xs bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-2 py-1 rounded-full font-medium">
                    Disponible
                  </span>
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Développeur web front-end junior formé en React, Next.js et
                  Tailwind CSS et WordPress,{" "}
                  <span className="text-blue-400 font-medium bg-blue-400/15 px-3 py-1 rounded-lg">
                    je suis actuellement à la recherche d’une première
                    opportunité
                  </span>{" "}
                  en entreprise ou en collaboration freelance. J’aime
                  transformer une idée ou une maquette en une interface fluide,
                  performante et agréable à utiliser, tout en accordant une
                  attention particulière à l’architecture front-end, à
                  l’expérience utilisateur et à la qualité du code.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-500/8 via-purple-500/8 to-green-500/8 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:bg-gradient-to-r hover:from-green-500/15 hover:via-purple-500/15 hover:to-green-500/15 transition-all duration-300 shadow-md shadow-green-500/10">
                <h3 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-purple-400 rounded-full mr-3 animate-pulse"></span>
                  Compétences et formation
                  <span className="ml-3 text-xs bg-gradient-to-r from-green-400 to-purple-400 text-white px-2 py-1 rounded-full font-medium">
                    BeCode
                  </span>
                </h3>
                <div className="text-gray-300 text-base leading-relaxed space-y-2">
                  <p>
                    <strong className="text-white">Formation :</strong> Diplômé
                    de BeCode avec une pédagogie active favorisant
                    l&apos;autonomie et la collaboration.
                  </p>
                  <p>
                    <strong className="text-white">Technologies :</strong>{" "}
                    HTML5, CSS3, JavaScript ES6+, React, Next.js, TypeScript,
                    Tailwind CSS, WordPress(thèmes, plugins, customisation),
                    Git, Vite.
                  </p>
                  <p>
                    <strong className="text-white">Projet clé :</strong> Site
                    e-commerce complet avec panier, authentification et design
                    responsive.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border-2 border-pink-400/30 rounded-xl p-6 hover:bg-gradient-to-r hover:from-pink-500/20 hover:via-purple-500/20 hover:to-blue-500/20 transition-all duration-300 shadow-lg shadow-pink-500/20">
                <h3 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3 animate-pulse"></span>
                  Expérience professionnelle
                  <span className="ml-3 text-sm bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 rounded-full font-medium">
                    Stage 3 mois
                  </span>
                </h3>
                <div className="text-gray-300 text-base leading-relaxed space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-pink-400 font-bold text-lg mt-1">
                      •
                    </span>
                    <span>
                      <strong className="text-white">
                        Progressive Web Apps
                      </strong>{" "}
                      avec Next.js (server components et server actions)
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 font-bold text-lg mt-1">
                      •
                    </span>
                    <span>
                      <strong className="text-white">
                        Développement interface
                      </strong>{" "}
                      du projet Lifestyle Fitness en intégrant les maquettes
                      Figma (desktop/mobile) avec Tailwind CSS
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 font-bold text-lg mt-1">
                      •
                    </span>
                    <span>
                      <strong className="text-white">
                        Système de traduction
                      </strong>{" "}
                      multilingue français/anglais
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-cyan-400 font-bold text-lg mt-1">
                      •
                    </span>
                    <span>
                      <strong className="text-white">
                        Environnement collaboratif
                      </strong>{" "}
                      Git/GitHub avec code reviews et pull requests
                    </span> 
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-emerald-400 font-bold text-lg mt-1">
                      •
                    </span>
                    <span>
                      <strong className="text-white">
                        Intégration et personnalisation
                      </strong>{" "}
                      de sites WordPress (thèmes, plugins, adaptation UI)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
