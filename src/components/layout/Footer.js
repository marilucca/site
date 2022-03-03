import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-regular-svg-icons'

import Logo from '../../svg/LogoIcon'

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex flex-row justify-center align-center flex-1 px-3">
        <Logo size={80} />
        <div className="ml-4">
          <p className="font-bold text-lg">Seiva Júnior</p>
          <p className="text-md text-gray-700">Consultoria Júnior em Sustentabilidade</p>
        </div>
      </div>
      <div className="flex-1 px-3">
        <h2 className="footer-title">Seiva Jr.</h2>
        <ul className="leading-loose">
          <li>
            <AnchorLink to="/">
              Início
            </AnchorLink>
          </li>

          <li>
            <AnchorLink to="/sobre">
              Sobre
            </AnchorLink>
          </li>

          <li>
            <AnchorLink to="/portfolio">
              Portfólio
            </AnchorLink>
          </li>

          <li>
            <AnchorLink to="/processo-seletivo">
              Processo Seletivo
            </AnchorLink>
          </li>

          <li>
            <AnchorLink to="/blog">
              Blog
            </AnchorLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="footer-title">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://dev.to/changoman">
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
              @seivajr
            </a>
          </li>
          <li>
            <a href="https://twitter.com/HuntaroSan">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/codebushi/gatsby-starter-lander">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
