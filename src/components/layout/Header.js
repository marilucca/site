/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons';

import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((state) => !state);

  return (
    <header className="navbar-container shadow">
      <div className="container flex justify-center items-center mx-auto py-4 px-8">
        <div className="flex items-center justify-start text-2xl w-full lg:w-auto">
          <AnchorLink to="/" className="flex items-center">
            <div className="w-12 mr-3">
              <LogoIcon size={48} />
            </div>
            Seiva Jr.
          </AnchorLink>

          <div
            className="ml-auto lg:hidden text-primary-default active:text-primary-darker cursor-pointer"
            onClick={toggle}
            role="navigation"
          >
            <FontAwesomeIcon icon={isOpen ? faClose : faBars} size="lg" />
          </div>
        </div>
        <div className="ml-auto flex hidden lg:flex">
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
          <div
            className="fixed z-50 bg-white w-full h-full flex flex-col items-center justify-evenly"
            style={{ top: '10vh' }}
          >
            <AnchorLink to="/">Início</AnchorLink>
            <AnchorLink to="/sobre">Sobre</AnchorLink>
            <AnchorLink to="/portfolio">Portfólio</AnchorLink>
            <AnchorLink to="/processo-seletivo">Processo Seletivo</AnchorLink>
            <AnchorLink to="/blog">Blog</AnchorLink>
          </div>
        ) : null}
        <div className="ml-4 hidden lg:block">
          <Button className="text-sm" to="/#contact">
            Entre em Contato
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
