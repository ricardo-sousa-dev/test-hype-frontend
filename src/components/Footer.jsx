import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <div className="simple-footer">
      <div className="developer">
        Developed by Ricardo Sousa
      </div>
      <div className="social-media">
        <a
          href="https://github.com/ricardo-sousa-dev"
          target="_blank"
          className="link-github"
        >
          <FaGithub className="icon-social-media" />
        </a>
        <a
          href="https://www.linkedin.com/in/rwmsousa/"
          target="_blank"
          className="link-linkedin"
        >
          <GrLinkedin className="icon-social-media" />
        </a>
        <a
          href="https://wa.me/5541987181564"
          target="_blank"
          className="link-whatsapp"
        >
          <FaWhatsapp className="icon-social-media" />
        </a>
        <a
          href="mailto:rwmsousa@gmail.com"
          target="_blank"
          className="link-email"
        >
          <FaRegEnvelope className="icon-social-media" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
