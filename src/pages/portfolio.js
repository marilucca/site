import React from 'react';

import PageLayout from '../components/layout/Layout';
import PageSection from '../components/PageSection';
import Title from '../components/Title';
import Services from '../components/Services';
import Seo from '../components/Seo';
import { container } from '../css/pages/sobre.module.css';

export default function Portfolio() {
  return (
    <PageLayout>
      <Seo title="Portfólio" />

      <PageSection className={container}>
        <Title>O que podemos fazer por você?</Title>

        <p>
          Você entra com a sua necessidade, tanto pessoal quanto empresarial e
          nós entramos com a atitude, visão e conhecimento universitário sobre
          Sustentabilidade integrada em todas as áreas. A Seiva Jr. pode tornar
          seus projetos eco-friendly ou então ajudar a desenvolver uma nova
          ideia.
        </p>

        <p>
          Para saber mais, baixe nosso portfólio e veja os serviços que já
          prestamos:{' '}
          <a
            href="https://drive.google.com/file/d/1w0mZYazLCiLmt19pGI1jxF8Dg1bhGri5/view"
            target="_blank"
            rel="noreferrer noopener"
          >
            Acesse nosso portfólio
          </a>
        </p>
      </PageSection>

      <Services />
    </PageLayout>
  );
}
