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
      <section id="sobre" className="mt-8 pt-20 lg:pb-20 lg:pt-48">
        <Seo title="Sobre Nós" />

        <div className="container mx-auto flex flex-col items-center md:items-start">
          <h2 className="title lg:text-5xl">Sobre Nós</h2>
        </div>
      </section>
      <section id="equipe" className="mt-8 pt-20 lg:pb-20 lg:pt-48">
        <Seo title="Equipe" />

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
