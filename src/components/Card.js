import React from 'react';

import {
  grid,
  cardContainer,
  cardTitle,
  cardContent,
} from '../css/components/Card.module.css';

export function Grid({ children }) {
  return <div className={grid}>{children}</div>;
}

export function Card({ children, className = '' }) {
  return <div className={`${cardContainer} ${className}`}>{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className={cardTitle}>{children}</h3>;
}

export function CardContent({ children }) {
  return <div className={cardContent}>{children}</div>;
}
