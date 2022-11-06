import React from 'react';

import { container } from '../css/components/Card.module.css';

const Card = ({ className, children }) => (
  <div className={`${container} ${className}`}>{children}</div>
);

export default Card;
