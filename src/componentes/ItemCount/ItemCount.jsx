import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div className="item-count">
      <button className="decrement" onClick={decrement}>-</button>
      <span className="count">{count}</span>
      <button className="increment" onClick={increment}>+</button>
      <button className="add-button" onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
