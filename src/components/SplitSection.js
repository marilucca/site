import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="section-container">
    <div className="section-primary">{primarySlot}</div>
    <div className={`section-secondary ${reverseOrder && `section-secondary-reverse`}`}>
      {secondarySlot}
    </div>
  </section>
);

export default SplitSection;
