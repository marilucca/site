import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const sizes = {
  default: `button-default`,
  lg: `button-large`,
  xl: `button-extra-large`,
};

const OutlinedButton = ({ children, className = '', size, to }) => {
  return (
    <AnchorLink
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        button-outlined
    `}
      to={to}
    >
      {children}
    </AnchorLink>
  );
};

export default OutlinedButton;
