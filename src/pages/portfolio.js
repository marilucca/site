import React from 'react';

import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import Services from '../components/Services';

const Portfolio = () => {
  return (
    <Layout>
      <section className="mt-8 pt-20 lg:pb-20 lg:pt-48">
        <Seo title="Portfólio" />

        <div className="container mx-auto flex flex-col items-center md:items-start">
          <div className="mb-8">
            <h2 className="title lg:text-5xl">O que podemos fazer por você?</h2>
            <p className="text-xl mt-6 font-light px-8">
              Você entra com a sua necessidade, tanto pessoal quanto empresarial e nós entramos com
              a atitude, visão e conhecimento universitário sobre Sustentabilidade integrada em
              todas as áreas. A Seiva Jr. pode tornar seus projetos eco-friendly ou então ajudar a
              desenvolver uma nova ideia.
            </p>
          </div>
          <div>
            <p className="text-xl mt-6 font-light px-8">
              Para saber mais, baixe nosso portfólio e veja os serviços que já prestamos:
            </p>
            <a
              className="text-xl mt-6 font-light px-8"
              href="https://drive.google.com/file/d/1w0mZYazLCiLmt19pGI1jxF8Dg1bhGri5/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acesse nosso portfólio
            </a>
          </div>
        </div>
      </section>
      <Services />
    </Layout>
  );
};

export default Portfolio;
