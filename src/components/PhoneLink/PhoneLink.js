import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PhoneLink.css';

function PhoneLink({ number, countryCode ='+33'  }) {
  const [showNumber, setShowNumber] = useState(false); 

  const handleClick = () => {
    setShowNumber(true); 
  };

  
  const formattedNumberForTel = `${countryCode}${number.replace(/\./g, '')}`;

  return (
    <div className="phone-link-container">
      {!showNumber ? (
        <button 
        onClick={handleClick} 
        className="reveal-phone-button"
        aria-label="Afficher le numéro de téléphone">
          Voir le numéro
        </button>
      ) : (
        <a 
        href={`tel:${formattedNumberForTel}`} 
        className="phone-link"
        aria-label={`Appelez le ${number}`}>
        {number}
        </a>
      )}
    </div>
  );
}

PhoneLink.propTypes = {
  number: PropTypes.string.isRequired,
  countryCode: PropTypes.string, 
};


export default PhoneLink;
