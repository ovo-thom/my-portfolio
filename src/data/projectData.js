import homepageImg from "../assets/popcornmovie/homepage_popcornmovie.png";
import advancedSearchImg from "../assets/popcornmovie/advancedsearch.png";
import movieDetailsImg from "../assets/popcornmovie/movie_details.png";
import favoritesImg from "../assets/popcornmovie/favorites.png";
import inputSearchImg from "../assets/popcornmovie/inputsearch.png";
import advancedInputImg from "../assets/popcornmovie/advancedsearch_inputselect.png";
import dailyDashboard from "../assets/daily_dashboard/dailydashboard.png";
import alarme from "../assets/daily_dashboard/alarme.png";
import chrono from "../assets/daily_dashboard/chrono.png";
import timer from "../assets/daily_dashboard/timer.png";
import filterIncident from "../assets/incident_manager/filter-incident.png";
import formIncident from "../assets/incident_manager/form-incident.png";
import gestionIncident from "../assets/incident_manager/gestion-incidents.png";
import artvibeDarkMode from "../assets/artvibe/artvibe_darkmode_homepage.png";
import artvibeLightMode from "../assets/artvibe/artvibe_lightmode-homepage.png";
import templateDoml from "../assets/doml/templateDoml.png";
import header from "../assets/doml/header.png";
import contactLogos from "../assets/doml/contactLogos.png";
import logosSection from "../assets/doml/logosSection.png";
import templateDomlResponsiv from "../assets/doml/templateDomlResponsiv.png";
import headerResponsiv from "../assets/doml/headerResponsiv.png";
import contactResponsiv from "../assets/doml/contactResponsiv.png";
import homepage from "../assets/la_casa_di_toma/homepage.png";
import navHero from "../assets/la_casa_di_toma/navhero.png";
import pizzaPasta from "../assets/la_casa_di_toma/PizzaPasta.png";
import welcomeAbout from "../assets/la_casa_di_toma/welcomeabout.png";
import recommandation from "../assets/la_casa_di_toma/recommandation.png";
import panier from "../assets/la_casa_di_toma/panier.png";
import contactFooter from "../assets/la_casa_di_toma/contactfooter.png";
import notificationPush from "../assets/la_casa_di_toma/notification_push.png";
import homepageFinelyia from "../assets/finelyia/homepage.png";
import transactionsFinelyia from "../assets/finelyia/transactions.png";
import settingsFinelyia from "../assets/finelyia/settings.png";

const projects = [
  {
    id: 1,
    title: "La Casa Di Toma",
    featured: true,
    description:
      "La Casa Di Toma est une application web front-end que j’ai développée pour m’entraîner sur un projet complet et réaliste. Mon objectif était de créer une interface moderne avec une expérience utilisateur fluide et agréable. Le projet inclut un système de panier interactif, une navigation animée et une version Progressive Web App (PWA) installable sur mobile et ordinateur. J’ai construit l’application avec React 18, TypeScript et Tailwind CSS, et travaillé sur la structuration des composants et la gestion d’état globale.",
    image: homepage,
    imageList: [
      homepage,
      panier,
      navHero,
      welcomeAbout,
      pizzaPasta,
      recommandation,
      contactFooter,
      notificationPush,
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "PWA",
      "Notification Push",
      "Tailwind",
      "Vite",
      "Framer Motion",
      "Context API",
      "Animation au scroll",
    ],
    demoLink: "https://la-casa-di-toma.vercel.app/",
    codeLink: "https://github.com/ovo-thom/la-casa-di-toma",
  },
  {
    id: 2,
    title: "Finelyia",
    inProgress: true,
    description:
      "Finelyia est une application web que je développe pour apprendre à gérer un projet plus complet autour de la gestion de finances personnelles. L’objectif est de permettre à un utilisateur de suivre ses dépenses et ses revenus, et d’avoir une vue claire de sa situation financière grâce à un tableau de bord et des graphiques. Ce projet me permet de travailler sur l’authentification, la gestion de données, l’organisation du code et le déploiement d’une application complète. Il est encore en cours de développement et sera amélioré progressivement avec de nouvelles fonctionnalités.",
    image: homepageFinelyia,
    imageList: [homepageFinelyia, transactionsFinelyia, settingsFinelyia],
    technologies: [
      "React",
      "Tailwind",
      "Firebase",
      "Chart.js",
      "Vite",
      "I18next",
    ],
    demoLink: "https://finelyia.netlify.app/",
    // codeLink: "",
  },
  {
    id: 3,
    title: "Popcorn Movie",
    description:
      "Popcorn Movie est une application web que j’ai développée autour de la découverte de films. Mon objectif était de créer une plateforme simple, rapide et agréable à utiliser, connectée à une API réelle. L’application s’appuie sur l’API de TMDb pour afficher en temps réel les films à l’affiche et les tendances du moment. J’ai intégré une barre de recherche interactive et des sliders responsives avec Swiper pour parcourir facilement le catalogue. Les utilisateurs peuvent aussi ajouter des films en favoris en un clic, avec une persistance des données grâce au LocalStorage. Ce projet m’a surtout permis de travailler sur l’intégration d’API, la gestion asynchrone des données, le responsive design et la création de composants React réutilisables.",
    image: homepageImg,
    imageList: [
      advancedSearchImg,
      advancedInputImg,
      movieDetailsImg,
      favoritesImg,
      inputSearchImg,
      homepageImg,
    ],
    technologies: [
      "Next.js (React)",
      "Tailwind",
      "TMDB(API)",
      "Swiper.js",
      "LocalStorage",
    ],
    demoLink: "https://popcorn-movie-two.vercel.app/",
    codeLink: "https://github.com/ovo-thom/popcorn_movie",
  },
  {
    id: 4,
    title: "ArtVibe",
    description:
      "ArtVibe est une application web que j’ai développée pour créer une galerie d’images inspirantes à partir d’une API externe. Mon objectif était de concevoir une interface claire et agréable permettant d’explorer facilement des œuvres visuelles. L’utilisateur peut rechercher des images, les filtrer par thème et naviguer dans une galerie en grille masonry entièrement responsive. J’ai aussi intégré un mode clair et sombre pour améliorer le confort d’utilisation. Ce projet m’a permis de travailler sur l’intégration de l’API Unsplash, le filtrage côté client, la gestion d’état en React, et la mise en place d’un design moderne avec Tailwind CSS.",
    image: artvibeLightMode,
    imageList: [artvibeDarkMode, artvibeLightMode],
    technologies: [
      "Next.js (React)",
      "Unsplash API",
      "TypeScript",
      "Tailwind",
      "Responsive design",
      "Masonry (react-masonry-css)",
      "Dark/Light mode",
    ],
    // demoLink: "",
    codeLink: "https://github.com/ovo-thom/artvibe",
  },
  {
    id: 5,
    title: "Doml",
    description:
      "Doml est un site vitrine que j’ai développé à partir d’une maquette réalisée sur Figma. Mon objectif était de reproduire le plus fidèlement possible un design professionnel conçu dans Figma, tout en créant une interface moderne et entièrement responsive. J’ai construit le projet avec Next.js et Tailwind CSS, en utilisant des composants React réutilisables pour garder un code bien organisé et facile à maintenir. J’ai aussi intégré des animations au scroll pour apporter du dynamisme et rendre le site plus interactif. Ce projet m’a permis de montrer ma capacité à transformer une maquette UI en application web réelle, proprement structurée et optimisée pour mobile et desktop.",
    image: templateDoml,
    imageList: [
      header,
      contactLogos,
      logosSection,
      templateDomlResponsiv,
      headerResponsiv,
      contactResponsiv,
    ],
    technologies: [
      "Next.js (React)",
      "Tailwind",
      "Responsive design",
      "Composants réutilisables",
      "Figma",
      "Animation au scroll",
    ],
    demoLink: "https://doml-ochre.vercel.app/",
    codeLink: "https://github.com/ovo-thom/doml",
  },
  {
    id: 6,
    title: "Incident-Manager",
    description:
      "Incident Manager est une application web que j’ai développée pour gérer et suivre des incidents de manière simple. Mon objectif était de créer un outil pratique permettant de créer des signalements, d’afficher une liste claire, de les modifier et de les supprimer facilement. J’ai construit ce projet avec React et Tailwind CSS en travaillant sur une architecture de composants modulaires et une gestion d’état efficace. Ce projet montre ma capacité à concevoir une application de gestion de données complète côté front."

,
    image: gestionIncident,
    imageList: [filterIncident, formIncident, gestionIncident],
    technologies: ["Next.js (React)", "Tailwind", "createPortal"],
    // demoLink: "",
    codeLink: "https://github.com/ovo-thom/incident-manager",
  },
  {
    id: 7,
    title: "Daily Dashboard",
    description:
      "Daily Dashboard : est une application web qui aide les utilisateurs à structurer leur journée et rester motivés. Elle regroupe plusieurs outils pratiques : une to-do list pour les tâches quotidiennes, un champ 'focus du jour', une citation inspirante renouvelée chaque jour, ainsi qu’un système complet d’alarme, chronomètre et minuteur.L’application affiche aussi la météo locale en temps réel grâce à l’API OpenWeather.L’interface est claire, responsive, et pensée pour favoriser l’organisation, la concentration et le bien-être au quotidien.",
    image: dailyDashboard,
    imageList: [dailyDashboard, chrono, alarme, timer],
    technologies: [
      "Next.js (React)",
      "Tailwind",
      "API OpenWeather",
      "CLSx",
      "LocalStorage",
      "Vercel",
      "Github",
    ],
    demoLink: "https://daily-dashboard-xi.vercel.app",
    codeLink: "https://github.com/ovo-thom/daily-dashboard",
  },
];

export default projects;
