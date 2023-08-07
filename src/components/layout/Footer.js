import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Socials from '../Socials';
import {
  container,
  wrapper,
  logoContainer,
  contentContainer,
  linksContainer,
  legalText,
  sloganText,
  nameText,
} from '../../css/components/layout/Footer.module.css';

export default function Footer() {
  return (
    <footer className={container}>
      <div className={wrapper}>
        <div className={logoContainer}>
          <StaticImage
            src="../../../static/images/logo-seiva.png"
            alt="Logo Seiva Jr"
            width={80}
            height={80}
            objectFit="contain"
          />
          <div>
            <p className={nameText}>Seiva Júnior</p>
            <p className={sloganText}>Consultoria Júnior em Sustentabilidade</p>
          </div>
        </div>

        <nav className={contentContainer}>
          <p>Páginas</p>
          <ul className={linksContainer}>
            <li>
              <AnchorLink to="/">Início</AnchorLink>
            </li>

            <li>
              <AnchorLink to="/sobre">Sobre</AnchorLink>
            </li>

            <li>
              <AnchorLink to="/portfolio">Portfólio</AnchorLink>
            </li>

            <li>
              <AnchorLink to="/calculadora">Calculadora carbônica</AnchorLink>
            </li>

            <li>
              <AnchorLink to="/blog">Blog</AnchorLink>
            </li>

            <li>
              <AnchorLink to="/#contato">Entre em contato</AnchorLink>
            </li>
          </ul>
        </nav>

        <div className={contentContainer}>
          <Socials />
        </div>
      </div>
      <p className={legalText}>© 2023 Seiva Jr.</p>
    </footer>
  );
}
