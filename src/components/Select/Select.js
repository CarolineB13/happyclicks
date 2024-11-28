import React, { useState } from 'react';
import './Select.css';

function Select({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseDown = () => {
    setIsOpen((prevState) => !prevState); // Alterne entre ouvert et fermé
  };

  const handleChange = (event) => {
    onChange(event); // Met à jour la valeur sélectionnée
    setIsOpen(false); // Ferme après sélection
  };

  return (
    <div className={`select-container ${isOpen ? 'open' : ''}`}>
      <select
        value={value}
        onMouseDown={handleMouseDown} // Gestion explicite du clic
        onChange={handleChange} // Réagit à la sélection
        className="select-dropdown"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
