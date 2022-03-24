import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`,
};

const OutlinedButton = ({ children, className = '', size, to }) => {
  return (
    <AnchorLink
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        border-solid
        border-4
        border-primary-default
        hover:border-primary-darker
        rounded
        text-primary-default
        hover:text-primary-darker
        font-bold
        cursor-pointer
    `}
      to={to}
    >
      {children}
    </AnchorLink>
  );
};

export default OutlinedButton;
