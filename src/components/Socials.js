import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faTiktok,
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import { container, title, item } from '../css/components/Socials.module.css';

const capitalize = (string) =>
  string
    .split('')
    .map((c, i) => (i === 0 ? c.toUpperCase() : c.toLowerCase()))
    .join('');

const socialLogo = {
  instagram: faInstagram,
  twitter: faTwitter,
  tiktok: faTiktok,
  facebook: faFacebook,
  linkedin: faLinkedin,
};

export default function Socials() {
  const data = useStaticQuery(graphql`
    query SocialsQuery {
      site {
        siteMetadata {
          social {
            facebook
            instagram
            linkedin
            tiktok
            twitter
          }
        }
      }
    }
  `);

  const socials = data.site.siteMetadata?.social;

  return (
    <div className={container}>
      <h2 className={title}>Redes Sociais</h2>
      <ul>
        <li className={item}>
          <a href={`https://api.whatsapp.com/send?phone=5511915952247`} target="_blank" rel="noopener norefferer">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            <span>+55 11 91595-2247</span>
          </a>
        </li>
        {Object.entries(socials).map(([key, value]) => (
          <li key={key} className={item}>
            <a href={value} target="_blank" rel="noopener norefferer">
              <FontAwesomeIcon icon={socialLogo[key]} size="lg" />
              <span>{capitalize(key)}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
