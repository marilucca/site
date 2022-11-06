import React from 'react';

import { statsBoxPrimary, statsBoxSecondary } from '../css/components/StatsBox.module.css';

export default function StatsBox({ primaryText, secondaryText }) {
  return (
    <div>
      <p className={statsBoxPrimary}>{primaryText}</p>
      <p className={statsBoxSecondary}>{secondaryText}</p>
    </div>
  );
}
