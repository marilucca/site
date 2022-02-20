import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="fixed w-full top-0 bg-white shadow z-50">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <AnchorLink to="/" className="flex items-center">
          <div className="w-12 mr-3">
            <LogoIcon size={48} />
          </div>
          Seiva Jr.
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0">
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
      <div className="hidden md:block">
        <Button className="text-sm">Entre em Contato</Button>
      </div>
    </div>
  </header>
);

export default Header;
