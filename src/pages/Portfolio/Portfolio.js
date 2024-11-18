// src/components/Portfolio.js
import React, { useState } from 'react';
import Select from '../../components/Select/Select';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../data/projectsData';
import './Portfolio.css';

const ITEMS_PER_PAGE = 6;

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous"
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const displayedProjects = filteredProjects
    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const uniqueCategories = ["Tous", ...new Set(projectsData.map((project) => project.category))];

  return (
    <div className="portfolio-section">
      <h2>Portfolio</h2>
      <Select options={uniqueCategories} value={selectedCategory} onChange={handleCategoryChange} />

      <div className="portfolio-grid">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
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
