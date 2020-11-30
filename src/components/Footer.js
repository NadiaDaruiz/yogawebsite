import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <ul className="footer-social-box circle">
          <li className="instagram">
            <a href="https://www.instagram.com/unadanzacosmica/" className="social-link">
              <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            </a>
          </li>
          <li className="linkedin">
            <a href="https://www.linkedin.com/in/lara-daruiz-9a29781b7/" className="social-link">
              <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} />
            </a>
          </li>
          <li className="facebook">
            <a href="https://www.facebook.com/larad9" className="social-link">
              <FontAwesomeIcon className=" social-icon" icon={faFacebookF} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;
