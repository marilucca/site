import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import {
  buttonDefault,
  buttonLarge,
  buttonExtraLarge,
  button,
  buttonOutlined,
} from '../css/components/Button.module.css';

const sizes = {
  default: buttonDefault,
  lg: buttonLarge,
  xl: buttonExtraLarge,
};

// A propriedade `type` pode ser usada para indicar que botão queremos usar
// O valor "filled" indica o botão totalmente preenchido com fundo verde
// enquanto o valor "outlined" indica o botão com borda verde e fundo transparente
const Button = ({ children, type = 'filled', className = '', size, to }) => {
  return (
    <AnchorLink
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        ${type === 'filled' ? button : buttonOutlined}
    `}
      to={to}
    >
      {children}
    </AnchorLink>
  );
};

export default Button;
