import React from 'react';

import {
  container,
  containerReversed,
  leftContainer,
  rightContainer,
} from '../css/components/TwoColumns.module.css';

export default function TwoColumns({ left, right, reversed }) {
  return (
    <div className={`${container} ${reversed ? containerReversed : ''}`}>
      <div className={leftContainer}>{left}</div>
      <div className={rightContainer}>{right}</div>
    </div>
  );
}
