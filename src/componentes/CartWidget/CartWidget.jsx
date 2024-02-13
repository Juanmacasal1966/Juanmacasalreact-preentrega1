import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return null;
  }

  return (
    <div className='cart-widget'>
      <img className='cart-icon' src="/istockphoto-1206806317-612x612.jpg" alt="carrito" />
      <strong className='cart-counter'>{cantidadTotal}</strong>
    </div>
  );
};

export default CartWidget;
