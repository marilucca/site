import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Person from '../components/Person';
import Layout from '../components/layout/Layout';

// import membros from '../data/membros-data.json'

export const pageData = graphql`
  query AboutQuery {
    allMembrosDataJson {
      edges {
        node {
          name
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 120, height: 120)
            }
          }
        }
      }
    }
  }
`;

const Sobre = ({ data }) => {
  const membros = data.allMembrosDataJson.edges;

  return (
    <Layout>
      <section id="sobre" className="mt-8 pt-20 lg:pt-48">
        <Seo title="Sobre Nós" />

        <div className="container mx-auto flex flex-col items-center md:items-start">
          <h2 className="title lg:text-5xl mb-2">Sobre Nós</h2>
          <p className="text-lg font-light px-8">
            A Seiva Júnior nasceu em 03 de Dezembro de 2013 na Universidade Federal do ABC com o
            desejo de cristalizar a temática ambiental, os conhecimentos acadêmicos e a integração
            entre discentes e docentes dos diferentes cursos e áreas do conhecimento da
            universidade. Em 2014, uma oportunidade de projeto remunerado tournou necessário a busca
            por um CNPJ. Com esse objetivo em mente, a Seiva foi se estruturando como uma Empresa
            Júnior focada no âmbito da sustentabilidade. Em 10 de junho de 2021, depois de quase 8
            anos de existência, a Seiva obteu seu CNPJ, oficializando-se como uma empresa.
          </p>
          <p className="text-lg mt-6 font-light px-8">
            Desde então, nosso trabalho é desenvolver projetos focados na minimização de impactos
            ambientais e na melhoria do desempenho das instituições em seu processo produtivo e
            organizacional, além de garantir o debate sobre sustentabilidade e mobilizar pessoas,
            recursos e empresas parceiras. Para isso aplicamos, de forma colaborativa e matricial,
            os conhecimentos teóricos e práticos de uma equipe interdisciplinar.
          </p>
          <p className="text-lg mt-6 font-light px-8">
            Atualmente, a Seiva é estruturada por meio de um sistema matricial, sendo dividida nas
            seguintes áreas:
          </p>
          <ul
            className="text-lg mt-6 font-light px-8"
            style={{ listStyleType: 'disc', listStylePosition: 'inside' }}
          >
            <li>Comercial e Projetos</li>
            <li>Financeiro</li>
            <li>Gestão de Talentos</li>
            <li>Marketing</li>
            <li>Publicidade e Propaganda</li>
            <li>Presidência</li>
          </ul>
        </div>
      </section>
      <section id="equipe" className="pt-10 lg:pb-20 lg:pt-24">
        <div className="container mx-auto flex flex-col items-center md:items-start">
          <h2 className="title lg:text-5xl mb-4">Equipe</h2>

          <div className="equipe-grid">
            {membros.map((membro) => (
              <Person
                key={membro.node.name}
                image={membro.node.image.childImageSharp.gatsbyImageData}
                name={membro.node.name}
                title={membro.node.title}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
