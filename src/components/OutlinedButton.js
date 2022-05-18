import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const OutlinedButton = ({ children, className = '', size, to }) => {
  return (
    <AnchorLink
      className={`
        ${className}
        ${size}
        button-outlined
      `}
      to={to}
    >
      {children}
    </AnchorLink>
  );
};

export default OutlinedButton;
