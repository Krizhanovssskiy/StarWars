import './style.scss';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab, faGitSquare, faLinkedin, } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faLinkedin, faGitSquare);

const Footer = () => (
  <div className="Footer">
    <div className="container">
      <a
        target='_blank'
        href="https://www.linkedin.com/in/krizhanovssskiy/"
      >
        <FontAwesomeIcon icon={faLinkedin}/>
        <span>Linkedin</span>
      </a>
      <a
        target='_blank'
        href="https://github.com/Krizhanovssskiy"
      >
        <FontAwesomeIcon icon={faGitSquare}/>
        <span>GitHub</span>
      </a>
    </div>
  </div>
);

export default Footer;