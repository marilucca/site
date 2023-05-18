import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Socials from '../Socials';
import {
  contentContainer,
  logoContainer,
  linksContainer,
} from '../../css/components/layout/Footer.module.css';

export default function Footer() {
  return (
    <footer className={contentContainer}>
      <div className={logoContainer}>
        <StaticImage
          src="../../../static/images/logo-seiva.png"
          width={80}
          height={80}
        />
        <div>
          <p>Seiva Júnior</p>
          <p>Consultoria Júnior em Sustentabilidade</p>
        </div>
      </div>

      <div>
        <h2>Seiva Jr.</h2>
        <nav>
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
              <AnchorLink to="/processo-seletivo">Processo seletivo</AnchorLink>
            </li>

            <li>
              <AnchorLink to="/calculadora">Calculadora Carbônica</AnchorLink>
            </li>

            <li>
              <AnchorLink to="/blog">Blog</AnchorLink>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <Socials />
      </div>
    </footer>
  );
}
