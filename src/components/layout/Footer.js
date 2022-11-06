import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';

import Socials from '../Socials';

const Footer = () => {
  return (
    <footer className="container mx-auto py-16 px-3 text-gray-800">
      <div className="flex -mx-3 flex-col md:flex-row">
        <div className="flex flex-row justify-center items-start flex-1 px-3 mb-4 md:mb-0">
          <StaticImage src="../../images/logo-seiva.png" width={80} height={80} />
          <div className="ml-4">
            <p className="font-bold text-lg">Seiva Júnior</p>
            <p className="text-md text-gray-700">Consultoria Júnior em Sustentabilidade</p>
          </div>
        </div>
        <div className="mx-4 flex flex-row justify-center flex-1 px-3">
          <div className="flex-1 px-3">
            <h2 className="footer-title">Seiva Jr.</h2>
            <ul className="leading-loose">
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
                <AnchorLink to="/processo-seletivo">Processo Seletivo</AnchorLink>
              </li>

              <li>
                <AnchorLink to="/blog">Blog</AnchorLink>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-3">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
