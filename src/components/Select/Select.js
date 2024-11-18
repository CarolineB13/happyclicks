// src/components/Select.js
import React from 'react';
import './Select.css';

function Select({ options, value, onChange }) {
  return (
    <div className="select-container">
      <select value={value} onChange={onChange} className="select-dropdown">
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
