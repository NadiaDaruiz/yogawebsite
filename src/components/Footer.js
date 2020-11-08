import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <div>
      <footer>
        <p>Created by Nadia - 2020</p>
        <FontAwesomeIcon className="log-icons" icon={faInstagram} />

      </footer>

    </div>
  )
}

export default Footer;
