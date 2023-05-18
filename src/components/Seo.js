import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const siteMetadataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

export default function Seo({ description = '', lang = 'pt-br', meta = [], title }) {
  const { site } = useStaticQuery(siteMetadataQuery);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  const siteUrl = site.siteMetadata?.siteUrl;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title || defaultTitle}
      titleTemplate={title ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title || defaultTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: 'og:url',
          content: siteUrl,
        },
        {
          property: 'og:site_name',
          content: defaultTitle,
        },
        {
          property: 'og:image',
          content: `../images/logo-seiva.png`,
        },
        {
          name: `twitter:card`,
          content: 'summary_large_image'
        },
        {
          name: `twitter:image:alt`,
          content: 'Seiva Júnior Consultoria em Sustentabilidade'
        }
      ].concat(meta)}
    />
  );
}
