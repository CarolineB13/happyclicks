import React, { useState, useEffect } from 'react';
import Select from '../../components/Select/Select';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../data/projectsData';
import arrowIcon from '../../assets/arrow-icon.png'; // Import de l'icône de flèche
import './Portfolio.css';

const ITEMS_PER_PAGE = 4;

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredProjects =
    selectedCategory === "Tous"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
    setIsAnimating(true); // Déclenche l'animation
  };

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => setIsAnimating(false), 1000); // Durée de l'animation
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const uniqueCategories = [
    "Tous",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  return (
    <div className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-intro">
        <p>
          Bienvenue dans mon portfolio ! Vous y découvrirez une variété de
          projets répartis en plusieurs catégories :
        </p>
        <ul className="category-list">
          {uniqueCategories.slice(1).map((category, index) => (
            <li key={index} className="category-item">
              <img src={arrowIcon} alt="Flèche" className="arrow-icon" />
              {category}
            </li>
          ))}
        </ul>
        <p>
          Chaque réalisation illustre mes compétences en développement web, ma
          créativité, et mon expertise technique.
        </p>
      </div>
      <a
        href="/cv/Caroline-Briois-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
      >
        Télécharger mon CV
      </a>

      <Select
        options={uniqueCategories}
        value={selectedCategory}
        onChange={handleCategoryChange}
      />

      <div className={`portfolio-grid ${isAnimating ? 'animating' : ''}`}>
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${
              currentPage === index + 1 ? 'active' : ''
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
