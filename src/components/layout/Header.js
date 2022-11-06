/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '../Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((state) => !state);

  return (
    <header className="navbar-container">
      <nav>
        <div className="logo-container">
          <AnchorLink to="/" className="logo-wrapper">
            <StaticImage src="../../images/logo-seiva.png" width={48} height={48} />
            Seiva Jr.
          </AnchorLink>

          <div className="hamburger-menu" onClick={toggle} role="navigation">
            <FontAwesomeIcon icon={isOpen ? faClose : faBars} size="lg" />
          </div>
        </div>

        <div className="links-container">
          <AnchorLink className="px-4" to="/">
            Início
          </AnchorLink>
          <AnchorLink className="px-4" to="/sobre">
            Sobre
          </AnchorLink>
          <AnchorLink className="px-4" to="/portfolio">
            Portfólio
          </AnchorLink>
          <AnchorLink className="px-4" to="/processo-seletivo">
            Processo seletivo
          </AnchorLink>
          <AnchorLink className="px-4" to="/calculadora">
            Calculadora carbônica
          </AnchorLink>
          <AnchorLink className="px-4" to="/blog">
            Blog
          </AnchorLink>
        </div>

        {isOpen ? (
          <div className="mobile-links-container">
            <AnchorLink to="/">Início</AnchorLink>
            <AnchorLink to="/sobre">Sobre</AnchorLink>
            <AnchorLink to="/portfolio">Portfólio</AnchorLink>
            <AnchorLink to="/processo-seletivo">Processo seletivo</AnchorLink>
            <AnchorLink to="/calculadora">Calculadora carbônica</AnchorLink>
            <AnchorLink to="/blog">Blog</AnchorLink>
          </div>
        ) : null}

        <div className="contact-button-container">
          <Button to="/#contact">Entre em contato</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
