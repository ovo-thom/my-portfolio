import { Link } from "react-router-dom";

function Training() {
  return (
    <section className="bg-gradient-to-br from-gray-950 via-slate-950 to-black px-4 sm:px-6 lg:px-10 py-16 md:py-20">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="title-night text-2xl sm:text-3xl lg:text-5xl font-bold text-center py-3 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
          Training & Education
        </h2>
        
        {/* Formation principale */}
        <div className="bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-violet-500/10 backdrop-blur-sm border-2 border-violet-400/30 rounded-xl p-4 sm:p-6 my-6 sm:my-8 hover:bg-gradient-to-r hover:from-violet-500/20 hover:via-indigo-500/20 hover:to-violet-500/20 transition-all duration-300 shadow-lg shadow-violet-500/20">
          <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 font-semibold text-white flex flex-col sm:flex-row items-start sm:items-center">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="w-3 h-3 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full mr-3 animate-pulse"></span>
              Formation Développeur Web
            </div>
            <span className="text-xs sm:text-sm bg-gradient-to-r from-violet-400 to-indigo-400 text-white px-3 py-1 rounded-full font-medium sm:ml-3">BeCode</span>
          </h3>
          <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-2 sm:space-y-3">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="text-violet-400 font-bold text-base sm:text-lg mt-1">•</span>
              <span><strong className="text-white">Formation intensive</strong> de 7 mois en développement web full-stack</span>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="text-indigo-400 font-bold text-base sm:text-lg mt-1">•</span>
              <span><strong className="text-white">Pédagogie active</strong> basée sur la pratique et l&apos;autonomie</span>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="text-purple-400 font-bold text-base sm:text-lg mt-1">•</span>
              <span><strong className="text-white">Technologies modernes</strong> : HTML5, CSS3, JavaScript, React, Node.js</span>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <span className="text-violet-300 font-bold text-base sm:text-lg mt-1">•</span>
              <span><strong className="text-white">Projets concrets</strong> en équipe et méthodologies agiles</span>
            </div>
          </div>
        </div>

        {/* Section certifications */}
        <div className="bg-gradient-to-r from-indigo-500/8 via-violet-500/8 to-indigo-500/8 backdrop-blur-sm border border-indigo-400/20 rounded-xl px-4 sm:px-6 py-6 sm:py-8 my-6 sm:my-8 hover:bg-gradient-to-r hover:from-indigo-500/15 hover:via-violet-500/15 hover:to-indigo-500/15 transition-all duration-300 shadow-md shadow-indigo-500/10">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4">
            <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full mr-0 sm:mr-3 mb-2 sm:mb-0 animate-pulse"></span>
            <span className="text-center">Certifications & Compétences supplémentaires</span>
          </h3>
          <p className="text-gray-100 font-medium text-center text-sm sm:text-base lg:text-lg">
            Découvrez les certifications et formations complémentaires que j&apos;ai obtenues.
          </p>
          <p className="text-gray-300 text-center text-xs sm:text-sm lg:text-base mt-2 sm:mt-3 italic">
            Cliquez ci-dessous pour consulter le détail de mon parcours.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            to="/training"
            className="inline-block mt-2 sm:mt-5 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 backdrop-blur-md border-2 border-violet-400/40 hover:bg-gradient-to-r hover:from-violet-500/30 hover:to-indigo-500/30 hover:border-violet-400/60 px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 transform shadow-xl shadow-violet-500/30 text-sm sm:text-base"
          >
            Voir mes certifications
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Training;
