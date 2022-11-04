import React from 'react';

const Card = ({ className, children }) => (
  <div className={`card-container ${className}`}>{children}</div>
);

export default Card;
