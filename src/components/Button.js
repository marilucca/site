import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

import {
  buttonBase,
  buttonDefault,
  buttonLarge,
  buttonExtraLarge,
  buttonFilled,
  buttonOutlined,
} from '../css/components/Button.module.css';

const sizes = {
  default: buttonDefault,
  lg: buttonLarge,
  xl: buttonExtraLarge,
};

export default function Button({
  children,
  type = 'filled',
  className = '',
  size,
  to,
}) {
  const sizeStyles = sizes[size] || sizes.default;
  const typeStyles = type === 'filled' ? buttonFilled : buttonOutlined;

  const classNames = `${buttonBase} ${sizeStyles} ${typeStyles} ${className}`;

  return (
    <AnchorLink className={classNames} to={to}>
      {children}
    </AnchorLink>
  );
}
