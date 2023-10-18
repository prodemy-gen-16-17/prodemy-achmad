import React from 'react';
import { useOrder } from './OrderContext';

function SummaryOrder() {
  const { order } = useOrder();

  if (order.items.length === 0) {
    return <p>No items in the order.</p>;
  }

  return (
    <div>
      <h2>Summary Order</h2>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Qty: {item.qty}
          </li>
        ))}
      </ul>
      <p>Total: ${order.items.reduce((total, item) => total + item.price * item.qty, 0)}</p>
    </div>
  );
}

export default SummaryOrder;
