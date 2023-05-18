import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import {
  navbarContainer,
  logoContainer,
  logoWrapper,
  hamburgerMenu,
  linksWrapper,
  linksWrapperActive,
} from '../../css/components/layout/Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((state) => !state);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      toggle();
    }
  };

  return (
    <header className={navbarContainer}>
      <nav>
        <div className={logoContainer}>
          <AnchorLink to="/" className={logoWrapper}>
            <StaticImage
              src="../../../static/images/logo-seiva.png"
              alt="Logo da Seiva Jr."
              width={48}
              height={48}
            />
            Seiva Jr.
          </AnchorLink>

          <button
            type="button"
            className={hamburgerMenu}
            onClick={toggle}
            onKeyDown={handleKeyDown}
          >
            <FontAwesomeIcon icon={isOpen ? faClose : faBars} size="lg" />
          </button>
        </div>

        <div className={`${linksWrapper} ${isOpen ? linksWrapperActive : ''}`}>
          <ul>
            <AnchorLink to="/">Início</AnchorLink>
            <AnchorLink to="/sobre">Sobre</AnchorLink>
            <AnchorLink to="/portfolio">Portfólio</AnchorLink>
            <AnchorLink to="/processo-seletivo">Processo seletivo</AnchorLink>
            <AnchorLink to="/calculadora">Calculadora carbônica</AnchorLink>
            <AnchorLink to="/blog">Blog</AnchorLink>
          </ul>

          <Button to="/#contact">Entre em contato</Button>
        </div>
      </nav>
    </header>
  );
}
