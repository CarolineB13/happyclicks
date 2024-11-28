import React, { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    // Ajoutez dynamiquement le script Elfsight
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyez le script au démontage
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="google-reviews-container">
      <div
        className="elfsight-app-97b90354-15ab-4b47-a4ee-d5b2de35406c"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default GoogleReviews;
