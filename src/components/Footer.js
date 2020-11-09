import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <p className="footer-text">Created by <a href="nadiadaruiz.com">Nadia Daruiz</a></p>
        <div className="footer-social-box">
          <FontAwesomeIcon className="log-icons" icon={faInstagramSquare} />
          <FontAwesomeIcon className="log-icons" icon={faLinkedin} />
          <FontAwesomeIcon className="log-icons" icon={faFacebookSquare} />
        </div>
      </footer>
    </div>
  )
}

export default Footer;
