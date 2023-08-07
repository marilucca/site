import React, { useState, useRef } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import {
  container,
  navigationContainer,
  logoContainer,
  hamburgerMenu,
  linksContainer,
  open,
  closed,
} from '../../css/components/layout/Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggle = () => setIsOpen((state) => !state);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      toggle();
    }
  };

  const linksClassName = `${linksContainer} ${isOpen ? open : closed}`;

  return (
    <header className={container}>
      <nav ref={navRef} className={navigationContainer}>
        <AnchorLink className={logoContainer} to="/">
          <StaticImage
            src="../../../static/images/logo-seiva.png"
            alt="Logo da Seiva Jr."
            width={64}
            height={64}
          />
          <span>Seiva Jr.</span>
        </AnchorLink>

        <button
          type="button"
          aria-label="Abrir menu"
          className={hamburgerMenu}
          onClick={toggle}
          onKeyDown={handleKeyDown}
        >
          <FontAwesomeIcon icon={isOpen ? faClose : faBars} size="lg" />
        </button>

        <ul style={{ top: navRef.current?.clientHeight || '8vh' }} className={linksClassName}>
          <li><AnchorLink to="/">Início</AnchorLink></li>
          <li><AnchorLink to="/sobre">Sobre</AnchorLink></li>
          <li><AnchorLink to="/portfolio">Portfólio</AnchorLink></li>
          <li><AnchorLink to="/calculadora">Calculadora carbônica</AnchorLink></li>
          <li><AnchorLink to="/blog">Blog</AnchorLink></li>
          <li><Button to="/#contato">Entre em contato</Button></li>
        </ul>

      </nav>
    </header>
  );
}
