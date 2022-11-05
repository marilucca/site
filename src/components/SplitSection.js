import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="split-section-container">
    <div className="split-section-primary">{primarySlot}</div>
    <div className={`split-section-secondary ${reverseOrder && `split-section-secondary-reverse`}`}>
      {secondarySlot}
    </div>
  </section>
);

export default SplitSection;
