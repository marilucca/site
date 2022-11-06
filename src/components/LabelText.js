import React from 'react';

import { text } from '../css/components/LabelText.module.css';

export default function LabelText({ children, className }) {
  return <p className={`${text} ${className}`}>{children}</p>;
}
