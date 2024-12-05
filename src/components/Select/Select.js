import React, { useState } from 'react';
import './Select.css';

function Select({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseDown = () => {
    setIsOpen((prevState) => !prevState); 
  };

  const handleChange = (event) => {
    onChange(event); 
    setIsOpen(false); 
  };

  return (
    <div className={`select-container ${isOpen ? 'open' : ''}`}>
      <select
        value={value}
        onMouseDown={handleMouseDown} 
        onChange={handleChange}
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
