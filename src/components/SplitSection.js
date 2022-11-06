import React from 'react';

import {
  container,
  primary,
  secondary,
  secondaryReverse,
} from '../css/components/SplitSection.module.css';

export default function SplitSection({ id, primarySlot, secondarySlot, reverseOrder }) {
  return (
    <section id={id} className={container}>
      <div className={primary}>{primarySlot}</div>
      <div className={`${secondary} ${reverseOrder && secondaryReverse}`}>{secondarySlot}</div>
    </section>
  );
}
