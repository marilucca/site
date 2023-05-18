import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import PageSection from './PageSection';
import Title from './Title';
import TwoColumns from './TwoColumns';
import {
  serviceContainer,
  serviceTitle,
  contentContainer,
  backgroundLight,
} from '../css/components/Service.module.css';

const servicesQuery = graphql`
  query {
    services: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "service" } } }
    ) {
      nodes {
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
        }
        html
        id
      }
    }
  }
`;

export default function Services() {
  const services = useStaticQuery(servicesQuery).services.nodes;

  return (
    <PageSection id="servicos">
      <div className={`${contentContainer} ${backgroundLight}`}>
        <Title>Nossos Serviços</Title>

        {services.map((service, index) => (
          <TwoColumns
            key={service.id}
            reversed={index % 2 !== 0}
            left={
              <div className={serviceContainer}>
                <h3 className={serviceTitle}>{service.frontmatter.name}</h3>
                <div dangerouslySetInnerHTML={{ __html: service.html }} />
              </div>
            }
            right={
              <GatsbyImage image={getImage(service.frontmatter.image)} alt="" />
            }
          />
        ))}
      </div>
    </PageSection>
  );
}
