// src/components/TechnologiesChart.js
import React from 'react';
import SkillBar from '../SkillBar/SkillBar';
import './TechnologiesChart.css';

function TechnologiesChart() {
  const skills = [
    { language: 'HTML', level: 90 },
    { language: 'CSS', level: 85 },
    { language: 'JavaScript', level: 80 },
    { language: 'React', level: 75 },
    { language: 'Redux', level: 70 },
    { language: 'MongoDB', level: 65 },
    { language: 'Node.js', level: 60 },
  ];

  return (
    <div className="technologies-chart">
      <h2>Mes Compétences Techniques</h2>
      {skills.map(skill => (
        <SkillBar key={skill.language} language={skill.language} level={skill.level} />
      ))}
    </div>
  );
}

export default TechnologiesChart;
