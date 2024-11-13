// src/components/SkillBar.js
import React from 'react';
import './SkillBar.css';

// Importez les icônes pour chaque compétence
import htmlIcon from '../../assets/icons/html.svg';
import cssIcon from '../../assets/icons/css.svg';
import jsIcon from '../../assets/icons/javascript.svg';
import reactIcon from '../../assets/icons/react.svg';
import reduxIcon from '../../assets/icons/redux.svg';
import mongoIcon from '../../assets/icons/mongodb.svg';
import nodeIcon from '../../assets/icons/node.svg';

// Associez chaque langage avec son icône
const languageIcons = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  React: reactIcon,
  Redux: reduxIcon,
  MongoDB: mongoIcon,
  'Node.js': nodeIcon,
};

function SkillBar({ language, level }) {
  return (
    <div className="skill-bar">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${level}%` }}>
          {/* Icône et nom de la compétence */}
          <div className="skill-info">
            <img src={languageIcons[language]} alt={language} className="skill-icon" />
            <span className="skill-name">{language}</span>
          </div>
          {/* Pourcentage de maîtrise */}
          <span className="skill-level">{level}%</span>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
