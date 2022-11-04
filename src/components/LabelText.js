import React from 'react';

const LabelText = ({ children, className = '' }) => (
  <p className={`label-text ${className}`}>{children}</p>
);

export default LabelText;
