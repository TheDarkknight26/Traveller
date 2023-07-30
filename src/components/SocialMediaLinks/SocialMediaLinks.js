import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedIn } from '@fortawesome/fontawesome-free';
import '../SocialMediaLinks/some.css';

const SocialMediaLinks = () => {
  
  return (
    <div className="social-media-container">
      <a className="social-media-icon" href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        Facebook
      </a>
      <a className="social-media-icon" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        Twitter
      </a>
      <a className="social-media-icon" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        Instagram
      </a>
      <a className="social-media-icon" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedIn} size="2x" />
        LinkedIn
      </a>
    </div>
  );
};

      
    
   

export default SocialMediaLinks;
