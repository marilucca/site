import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { container, info, nameText, picture } from '../css/components/Person.module.css';

export default function Person({ image, name, title }) {
  return (
    <div className={container}>
      <GatsbyImage image={image} alt={name} className={picture} />
      <div className={info}>
        <p className={nameText}>{name}</p>
        {title ? (
          <>
            <p>{title}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}
