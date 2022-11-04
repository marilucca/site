import React from 'react';

import Card from './Card';

const CustomerCard = ({ customer }) => (
  <Card className="customer-card-container">
    <p className="customer-title">{customer.title}</p>
    <p>{customer.content}</p>
    <div className="customer-image-container">
      <img className="customer-image" src={customer.customerImage} alt={customer.customerName} />
      <div>
        <p>{customer.customerName}</p>
        <p className="customer-person-title">{customer.customerTitle}</p>
      </div>
    </div>
  </Card>
);

export default CustomerCard;
