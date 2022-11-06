import React from 'react';

import Card from './Card';
import {
  container,
  title,
  imageContainer,
  person,
} from '../css/components/CustomerCard.module.css';

const CustomerCard = ({ customer }) => (
  <Card className={container}>
    <p className={title}>{customer.title}</p>
    <p>{customer.content}</p>
    <div className={imageContainer}>
      <img src={customer.customerImage} alt={customer.customerName} />
      <div>
        <p>{customer.customerName}</p>
        <p className={person}>{customer.customerTitle}</p>
      </div>
    </div>
  </Card>
);

export default CustomerCard;
