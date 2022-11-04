/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from '../svg/LogoIcon';
import Socials from './Socials';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  return (
    <div className="bio-container">
      <div className="bio-logo-container">
        <Logo size={48} />
        <p className="bio-paragraph">
          <strong>{author.name}</strong> {author.summary}
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default Bio;
