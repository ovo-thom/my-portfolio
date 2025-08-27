import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Gestion du scroll vers la section après navigation
  useEffect(() => {
    const section = sessionStorage.getItem("scrollToSection");
    if (location.pathname === "/" && section) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      sessionStorage.removeItem("scrollToSection");
    }
  }, [location]);

  // Fonction pour gérer le clic sur une section
  const handleSectionClick = (sectionId) => {
    if (location.pathname !== "/") {
      sessionStorage.setItem("scrollToSection", sectionId);
      navigate("/");
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false); // ferme le menu burger si ouvert
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar visible sur grands écrans */}
      <nav
        className={`hidden max-w-6xl border border-white/10 md:block md:w-2/3 md:left-1/2 md:transform md:-translate-x-1/2 fixed top-[2%] rounded-lg text-white py-4 lg:px-12 bg-black/30 backdrop-blur-md z-[999] transition-all duration-300 ease-in-out cursor-pointer ${
          isVisible ? "transform-none" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Link
              to="/"
              className="title-night text-base sm:text-xl md:text-3xl font-bold ml-2 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent"
            >
              Thomas | Portfolio
            </Link>
          </div>

          {/* Menu pour les grands écrans */}
          <div className="text-xl">
            <button
              onClick={() => handleSectionClick("about")}
              className="ml-6 relative bg-transparent border-none after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full duration-200 hover:text-gray-300"
              style={{ background: "none", padding: 0, cursor: "pointer" }}
            >
              About
            </button>
            <button
              onClick={() => handleSectionClick("skills")}
              className="ml-6 relative bg-transparent border-none after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full duration-200 hover:text-gray-300"
              style={{ background: "none", padding: 0, cursor: "pointer" }}
            >
              Skills
            </button>
            <button
              onClick={() => handleSectionClick("projects")}
              className="ml-6 relative bg-transparent border-none after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full duration-200 hover:text-gray-300"
              style={{ background: "none", padding: 0, cursor: "pointer" }}
            >
              Projects
            </button>
            <button
              onClick={() => handleSectionClick("contact")}
              className="ml-6 relative bg-transparent border-none after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full duration-200 hover:text-gray-300"
              style={{ background: "none", padding: 0, cursor: "pointer" }}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Menu burger visible sur petits écrans */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 shadow-lg">
        <div className="flex justify-between items-center py-4 px-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Retour à l'accueil"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-widest drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
              TT
            </span>
            <FaCode
              size={24}
              className="text-blue-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]"
            />
          </button>
          <button
            onClick={toggleMenu}
            className="text-2xl text-white focus:outline-none"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen ? "true" : "false"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu burger pour les petits écrans */}
        {isOpen && (
          <div className="bg-black/20 text-white flex flex-col items-center text-lg py-4">
            <button
              onClick={() => handleSectionClick("about")}
              className="hover:underline py-2 border-b border-b-blue-500 w-full text-center bg-transparent"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              About
            </button>
            <button
              onClick={() => handleSectionClick("skills")}
              className="hover:underline py-2 w-full border-b border-b-purple-500 text-center bg-transparent"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Skills
            </button>
            <button
              onClick={() => handleSectionClick("projects")}
              className="hover:underline py-2 w-full border-b border-b-pink-500 text-center bg-transparent"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Projects
            </button>
            <button
              onClick={() => handleSectionClick("contact")}
              className="py-2 w-full text-center bg-transparent"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
