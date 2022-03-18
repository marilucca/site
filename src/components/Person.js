import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Person = ({ image, name, title }) => {
  return (
    <div className="person flex flex-col items-center justify-center">
      <GatsbyImage image={image} alt={name} className="person-image" />
      <div className="person-info flex md:hidden mt-4 md:mt-0">
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
