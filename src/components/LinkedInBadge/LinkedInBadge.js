import React, { useEffect } from 'react';

const LinkedInBadge = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="fr_FR"
      data-size="medium"
      data-theme="light"
      data-type="VERTICAL"
      data-vanity="caroline-briois-213797100"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href="https://fr.linkedin.com/in/caroline-briois-213797100?trk=profile-badge"
      >
      </a>
    </div>
  );
};

export default LinkedInBadge;
