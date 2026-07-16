import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import homepage from "../assets/popcornmovie/home_popcornmovie.png";
import homePageFinelyia from "../assets/finelyia/Finelyia.png";
import laCasaDiToma from "../assets/la_casa_di_toma/homepage.png";
import { LuPopcorn } from "react-icons/lu";
import { CiPizza } from "react-icons/ci";
import { PiWatch } from "react-icons/pi";
import timeElegance from "../assets/timeelegance/timeElegance_fullscreen.png";
import { FaRegChartBar } from "react-icons/fa";

import { EffectCube, Pagination } from "swiper/modules";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <>
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImg}
            alt="Agrandie"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold bg-black/60 rounded-full px-3 py-1 hover:bg-black/80 transition"
            onClick={closeModal}
            aria-label="Fermer la modale"
          >
            ×
          </button>
        </div>
      )}

      <section id="projects" className="project w-full py-20 md:py-20 lg:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="title-night text-center text-3xl sm:text-3xl lg:text-5xl sm:my-12 md:my-12 font-semibold bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent leading-relaxed py-2">
            Mes projets
          </h2>
          <div className="w-full flex flex-col md:items-center lg:flex-row">
            <div className="project-description text-xl lg:w-1/2 px-5">
              <div className="py-4 mb-8 md:mb-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-6 md:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-baseline space-x-3 mb-2">
                  <p className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                    Popcorn Movie
                  </p>
                  <span className="text-cyan-400 text-lg sm:text-lg">
                    <LuPopcorn />
                  </span>
                </div>
                <p className="mb-4 text-gray-100 text-base">
                  <span className="italic font-light text-blue-600 ">
                    PopCorn Movie :
                  </span>{" "}
                  Une application web moderne de découverte de films, développée
                  avec Next.js et stylisée via Tailwind CSS. Elle s&apos;appuie
                  sur l&apos;API de TMDb (The Movie Database) pour récupérer en
                  temps réel les derniers films à l&apos;affiche, les tendances
                  du moment, et les résultats de recherche personnalisés.
                </p>
                <Link
                  to="/projects/3"
                  className="text-gray-200 hover:text-white duration-300 border border-gray-600 hover:border-gray-400 px-3 py-1 rounded-md text-sm"
                >
                  → Voir le projet en détail
                </Link>
              </div>
              <div className="py-4 mb-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-baseline space-x-3 mb-2">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                    La Casa Di Toma
                  </h2>
                  <span className="text-red-400 text-lg sm:text-2xl">
                    <CiPizza />
                  </span>
                </div>
                <p className="mb-4 text-gray-100 text-base">
                  <span className="italic font-light text-blue-600 ">
                    La Casa Di Toma :
                  </span>{" "}
                  Application web moderne pour restaurant italien construite
                  avec React 18 et TypeScript. Le projet intègre un système de
                  panier complet avec gestion d&apos;état via Context API,
                  permettant l&apos;ajout, modification et suppression
                  d&apos;articles.
                </p>
                <Link
                  to="/projects/6"
                  className="text-gray-200 hover:text-white duration-300 border border-gray-600 hover:border-gray-400 px-3 py-1 rounded-md text-sm"
                >
                  → Voir le projet en détail
                </Link>
              </div>

              <div className="py-4 mb-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-baseline space-x-3 mb-2">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                    Finelyia
                  </h2>
                  <span className="text-indigo-400 text-lg sm:text-xl">
                    <FaRegChartBar />
                    <span className="absolute top-3 right-2 z-10 rounded-full border border-indigo-400/60 bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-300 backdrop-blur-sm">
                      Projet en cours
                    </span>
                  </span>
                </div>
                <p className="mb-4 text-gray-100 text-base">
                  <span className="italic font-light text-blue-600 ">
                    Finelyia :
                  </span>{" "}
                  Application web de gestion des finances personnelles
                  développée avec React et Firebase. Le projet intègre un
                  système d’authentification, le suivi des dépenses et des
                  revenus, ainsi qu’un tableau de bord avec graphiques pour
                  visualiser la situation financière de l’utilisateur.
                </p>
                <Link
                  to="/projects/2"
                  className="text-gray-200 hover:text-white duration-300 border border-gray-600 hover:border-gray-400 px-3 py-1 rounded-md text-sm"
                >
                  → Voir le projet en détail
                </Link>
              </div>

              <div className="py-4 mb-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-baseline space-x-3 mb-2">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                    TimeElegance
                  </h2>
                  <span className="text-amber-400 text-lg sm:text-xl">
                    <PiWatch />
                  </span>
                </div>
                <p className="mb-4 text-gray-100 text-base">
                  <span className="italic font-light text-blue-600 ">
                    TimeElegance :
                  </span>{" "}
                  TimeElegance : Site vitrine multipage dédié à l’univers des
                  montres de luxe, réalisé avec WordPress, Astra et Elementor à
                  partir d’une maquette générée par IA, puis adapté en
                  responsive pour mobile et tablette.
                </p>
                <Link
                  to="/projects/7"
                  className="text-gray-200 hover:text-white duration-300 border border-gray-600 hover:border-gray-400 px-3 py-1 rounded-md text-sm"
                >
                  → Voir le projet en détail
                </Link>
                <span className="absolute top-3 right-2 z-10 rounded-full border border-amber-400/60 bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-300 backdrop-blur-sm">
                  Projet Wordpress
                </span>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-1 flex-col justify-center items-center relative">
              <div className="text-[#e1e143] animate-bounce text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl mb-5 font-semibold">
                ↓ Swipe pour voir plus ↓
              </div>

              <div className="w-full aspect-square mx-auto flex items-center justify-center max-h-[60vh] sm:max-h-[80vh]">
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  pagination={true}
                  modules={[EffectCube, Pagination]}
                  className="w-full h-full sm:w-4/5 md:w-1/2 lg:w-[80%]"
                >
                  <SwiperSlide className="flex justify-center items-center w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                      <img
                        src={homepage}
                        alt="PopcornMovie"
                        className="w-full h-full object-cover object-top cursor-pointer"
                        onClick={() => openModal(homepage)}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                      <img
                        src={laCasaDiToma}
                        alt="Headphones"
                        className="w-full h-full object-cover object-top cursor-pointer"
                        onClick={() => openModal(laCasaDiToma)}
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="flex justify-center items-center w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                      <img
                        src={homePageFinelyia}
                        alt="Lifestyle"
                        className="w-full h-full object-cover object-top cursor-pointer"
                        onClick={() => openModal(homePageFinelyia)}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                      <img
                        src={timeElegance}
                        alt="Craftify Home"
                        className="w-full h-full object-cover object-top cursor-pointer"
                        onClick={() => openModal(timeElegance)}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="text-center text-base md:text-xl my-5">
            <Link
              to="/projects"
              className="inline-block bg-gray-800/20 backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/30 hover:border-gray-500/50 px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 transform shadow-xl shadow-gray-500/20"
            >
              Voir plus de projets
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
