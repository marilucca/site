import React from 'react';
import { graphql } from 'gatsby';

import PageSection from '../components/PageSection';
import Seo from '../components/Seo';
import Title from '../components/Title';
import PageLayout from '../components/layout/Layout';
import Person from '../components/Person';
import {
  container,
  membersContainer,
  lastContainer,
} from '../css/pages/sobre.module.css';

export const pageData = graphql`
  query IndexPageServicesQuery {
    membros: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "member" } } }
      sort: { fields: frontmatter___name }
    ) {
      nodes {
        frontmatter {
          name
          ga
          cargo
          memberImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;

export default function Sobre({ data }) {
  const membros = data.membros.nodes;

  return (
    <PageLayout>
      <Seo title="Sobre Nós" />

      <PageSection className={container}>
        <Title>Sobre Nós</Title>

        <p>
          A Seiva Júnior nasceu em 03 de Dezembro de 2013 na Universidade
          Federal do ABC com o desejo de cristalizar a temática ambiental, os
          conhecimentos acadêmicos e a integração entre discentes e docentes dos
          diferentes cursos e áreas do conhecimento da universidade. Em 2014,
          uma oportunidade de projeto remunerado tornou necessário a busca por
          um CNPJ. Com esse objetivo em mente, a Seiva foi se estruturando como
          uma Empresa Júnior focada no âmbito da sustentabilidade. Em 10 de
          junho de 2021, depois de quase 8 anos de existência, a Seiva obteu seu
          CNPJ, oficializando-se como uma empresa.
        </p>
        <p>
          Desde então, nosso trabalho é desenvolver projetos focados na
          minimização de impactos ambientais e na melhoria do desempenho das
          instituições em seu processo produtivo e organizacional, além de
          garantir o debate sobre sustentabilidade e mobilizar pessoas, recursos
          e empresas parceiras. Para isso aplicamos, de forma colaborativa e
          matricial, os conhecimentos teóricos e práticos de uma equipe
          interdisciplinar.
        </p>
        <p>
          Atualmente, a Seiva é estruturada por meio de um sistema matricial,
          sendo dividida nas seguintes áreas:
        </p>
        <ul>
          <li>Comercial e Projetos</li>
          <li>Financeiro</li>
          <li>Gestão de Talentos</li>
          <li>Marketing</li>
          <li>Publicidade e Propaganda</li>
          <li>Presidência</li>
        </ul>
      </PageSection>

      <PageSection className={lastContainer}>
        <Title>Equipe</Title>

        <div className={membersContainer}>
          {membros.map(({ frontmatter, id }) => (
            <Person key={id} membro={frontmatter} />
          ))}
        </div>
      </PageSection>
    </PageLayout>
  );
}
