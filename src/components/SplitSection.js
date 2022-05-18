import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="split-section">
    <div className="container split-section-container">
      <div className="split-section-primary">{primarySlot}</div>
      <div className={`split-section-secondary ${reverseOrder && `order-last lg:order-first`}`}>
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
