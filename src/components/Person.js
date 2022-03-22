import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Person = ({ image, name, title }) => {
  return (
    <div className="person flex flex-col items-center justify-start">
      <GatsbyImage image={image} alt={name} className="person-image" />
      <div className="person-info flex mt-4">
        <p className="person-name">{name}</p>
        {title ? (
          <>
            <p>{title}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Person;
