import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Button = ({ children, className = '', size = 'button-default', to }) => {
  return (
    <AnchorLink
      className={`
        ${className}
        ${size}
        button
      `}
      to={to}
    >
      {children}
    </AnchorLink>
  );
};

export default Button;
