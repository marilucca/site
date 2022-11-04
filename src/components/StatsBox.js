import React from 'react';

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <p className="stats-box-primary">{primaryText}</p>
    <p className="stats-box-secondary">{secondaryText}</p>
  </>
);

export default StatsBox;
