import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import PageLayout from '../components/layout/Layout';
import PageSection from '../components/PageSection';
import Title from '../components/Title';
import Seo from '../components/Seo';
import { container } from '../css/pages/processo-seletivo.module.css';

export default function ProcessoSeletivo() {
  return (
    <PageLayout>
      <Seo title="Processo Seletivo" />

      <PageSection className={container}>
        <Title>Processo Seletivo 2022</Title>

        <StaticImage
          src="../../static/images/processo-seletivo.jpeg"
          alt=""
          placeholder="blurred"
          layout="constrained"
          width={350}
        />

        <p>
          O processo seletivo de 2022 já foi encerrado! Atente-se às nossas
          redes sociais para saber quando o processo abrirá e como ele
          funcionará!
          <br />
          <br /> A Seiva Jr. é uma Empresa Júnior da Universidade Federal do ABC
          (UFABC) que visa promover o conceito de <span>
            SUSTENTABILIDADE
          </span>{' '}
          a partir da <span>DIFUSÃO de CONHECIMENTO</span>, da{' '}
          <span>INOVAÇÃO</span> e de <span>CONSULTORIAS</span>.
          <br />
          <br />
          A empresa é organizada de maneira matricial, o que permite um
          crescimento profissional para todos os membros, visto que todos são
          igualmente aptos a tomar decisões importantes e propor novas ideias.
          <br />
          <br />
          Coloque suas ideias em prática e faça parte da nossa história!
          <br />
          <br />
          Qualquer dúvida, contate a equipe Seiva através das redes sociais.
        </p>
      </PageSection>
    </PageLayout>
  );
}
