import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-tech">{project.technologies.join(', ')}</p>
        <div className="project-links">
          <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">Code source</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
