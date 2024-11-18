// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card animate-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
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
