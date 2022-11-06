import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Logo from '../svg/LogoIcon';
import Socials from './Socials';

import { container, logoContainer } from '../css/components/Bio.module.css';

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

  const author = data.site.siteMetadata?.author;

  return (
    <div className={container}>
      <div className={logoContainer}>
        <Logo size={48} />
        <p>
          <strong>{author.name}</strong> {author.summary}
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default Bio;
