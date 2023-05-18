import React from 'react';

import { container } from '../css/components/ButtonGroup.module.css';

export default function ButtonGroup({ children }) {
  return <div className={container}>{children}</div>;
}
