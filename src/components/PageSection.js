import React from 'react';

import { sectionContainer } from '../css/components/PageSection.module.css';

export default function PageSection({ children, className, id }) {
  const classNames = `${sectionContainer} ${className}`;

  return (
    <section className={classNames} id={id}>
      {children}
    </section>
  );
}
