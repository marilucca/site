import React from 'react';

import { title } from '../css/components/Title.module.css';

export default function Title({ children }) {
  return <h2 className={title}>{children}</h2>;
}
