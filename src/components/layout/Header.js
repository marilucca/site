/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons';

import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

// TODO: create custom link component
// TODO: fix button styling
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((state) => !state);

  return (
    <header className="navbar-container shadow">
      <nav className="container">
        <div className="logo-container">
          <AnchorLink to="/" className="logo-image-container">
            <div className="logo-image">
              <LogoIcon size={48} />
            </div>
            Seiva Jr.
          </AnchorLink>

          <div className="menu-icon-container" onClick={toggle} role="navigation">
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
            Processo Seletivo
          </AnchorLink>
          <AnchorLink className="px-4" to="/blog">
            Blog
          </AnchorLink>
        </div>
        {isOpen ? (
          <div className="links-menu-container" style={{ top: '10vh' }}>
            <AnchorLink to="/">Início</AnchorLink>
            <AnchorLink to="/sobre">Sobre</AnchorLink>
            <AnchorLink to="/portfolio">Portfólio</AnchorLink>
            <AnchorLink to="/processo-seletivo">Processo Seletivo</AnchorLink>
            <AnchorLink to="/blog">Blog</AnchorLink>
          </div>
        ) : null}
        <div className="contact-button-container">
          <Button className="text-sm" to="/#contact">
            Entre em Contato
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
