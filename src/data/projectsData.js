import ohmyfoodImage from '../assets/sites/ohmyfood.png'
import printitImage from '../assets/sites/printit.png'
import kasaImage from '../assets/sites/kasa.png'
import ninaCarducciImage from '../assets/sites/nina-carducci.png'
import argentBankImage from '../assets/sites/argent-bank.png'
import appartBeauteImage from '../assets/sites/appart-beaute.png'

const projectsData = [
    {
      id: 1,
      title: "OhMyFood",
      description: "Projet d'amélioration de l'interface mobile-first d'une start-up, avec intégration de maquettes et animations CSS pour une navigation interactive et engageante. Utilisation de SASS pour organiser les styles et Git pour le versionnement.",
      technologies: ["HTML", "CSS", "SASS", "Git", "GitHub"],
      image: ohmyfoodImage,
      link: "https://ohmyfood.happyclicks.fr/",
      github: "https://github.com/CarolineB13/ohmyfood.git",
      date: "2024-04-02",
      category: "Formation"
    },
    {
        id: 2,
        title: "Print It",
        description: "Dynamisation du site statique d'une imprimerie avec un carrousel interactif en JavaScript. ",
        technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
        image: printitImage, 
        link: "https://printit.happyclicks.fr/", 
        github: "https://github.com/CarolineB13/Print-it", 
        date: "2024-04-15", 
        category: "Formation"
      },
      {
        id: 3,
        title: "Portfolio Architecte d’Intérieur",
        description: "Création d'une page web dynamique avec JavaScript et communication avec une API pour le site d'une architecte d'intérieur. Le projet comprend une page de présentation des travaux, une page de connexion administrateur, et une modale pour l'ajout de médias.",
        technologies: ["HTML", "CSS", "JavaScript", "API", "Git", "GitHub"],
        image: "../assets/sites/portfolio-architect.jpg", 
        link: "https://sophiebluel.happyclicks.fr/", 
        github: "https://github.com/CarolineB13/Portfolio-architecte-sophie-bluel-master.git", 
        date: "2024-06-16",
        category: "Formation"
      },
      {
        id: 4,
        title: "Kasa",
        description: "Développement front-end d'une application web de location immobilière avec React et React Router. Création d'une interface utilisateur réactive et moderne en utilisant des données JSON et en respectant les maquettes fournies. Gestion de la navigation avec React Router pour une expérience fluide.",
        technologies: ["React", "React Router", "JavaScript", "SASS", "CSS", "Node.js"],
        image: kasaImage,
        link: "https://kasa.happyclicks.fr/", // Lien vers la version en ligne du projet
        github: "https://github.com/CarolineB13/kasa", // Lien vers le dépôt GitHub
        date: "2024-06-15", // Date d'achèvement
        category: "Formation"
      },
      {
        id: 5,
        title: "Nina Carducci - Photographe",
        description: "Optimisation SEO et accessibilité pour le site d'un photographe freelance, incluant des améliorations de performances et de structure du code. Utilisation d'outils comme Lighthouse et Wave pour évaluer et appliquer les modifications nécessaires pour le référencement.",
        technologies: ["HTML", "CSS", "JavaScript", "SEO", "Lighthouse", "Wave"],
        image: ninaCarducciImage, // Chemin vers l'image du projet
        link: "https://ninacarducci.happyclicks.fr/", // Lien vers la version en ligne
        github: "https://github.com/CarolineB13/Photographe_Nina_Carducci.git", // Lien vers le dépôt GitHub
        date: "2024-08-07", // Date d'achèvement
        category: "Formation"
      },
      {
        id: 6,
        title: "Argent Bank",
        description: "Développement du front-end d'une application bancaire avec React et Redux, intégrée au back-end via des appels API REST. Création d'un tableau de bord utilisateur et gestion de l'état global de l'application. Utilisation de Swagger pour documenter et définir les points d'accès de l'API.",
        technologies: ["React", "Redux", "JavaScript", "API REST", "Swagger", "Node.js"],
        image: argentBankImage, // Chemin vers l'image du projet
        link: "https://argent-bank.happyclicks.fr/", // Lien vers la version en ligne
        github: "https://github.com/CarolineB13/argentbank-frontend-react.git", // Lien vers le dépôt GitHub
        date: "2024-10-10", // Date d'achèvement
        category: "Formation"
      },
      {
        id: 7,
        title: "Appart Beauté Institut",
        description: "Création d'un site vitrine pour un institut de beauté, avec une interface élégante et moderne, optimisée pour une présentation claire des services de l'institut.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: appartBeauteImage, // Chemin vers l'image du projet
        link: "https://carolineb13.github.io/APPART_BEAUTE_INSTITUT/", // Lien vers la version en ligne
        github: "https://github.com/CarolineB13/APPART_BEAUTE_INSTITUT", // Lien vers le dépôt GitHub
        date: "2024-10-31", // Date d'achèvement du projet
        category: "Client"
      }
      
  ];
  
  export default projectsData;
  