import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const sizes = {
  default: `button-default`,
  lg: `button-large`,
  xl: `button-extra-large`,
};

const Button = ({ children, className = '', size, to }) => {
  return (
    <AnchorLink
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        button
    `}
      to={to}
    >
      {children}
    </AnchorLink>
  );
};

export default Button;
