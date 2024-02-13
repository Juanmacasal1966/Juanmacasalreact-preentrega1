import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, stock, precio, img, descripcion }) => {
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const handleAgregarAlCarrito = (cantidad) => {
    setCantidadSeleccionada(cantidad);
    const item = { id, nombre, precio, descripcion }; 
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <p>ID: {id}</p>
      <p>Stock: {stock}</p>
      <p>{descripcion}</p>
      <img src={img} alt={nombre} />

      {cantidadSeleccionada > 0 ? (
        <Link to="/cart">Terminar compra</Link>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleAgregarAlCarrito} />
      )}
    </div>
  );
};

export default ItemDetail;



