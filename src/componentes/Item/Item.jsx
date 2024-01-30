// Item.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="item-container">
      <img className="item-img" src={img} alt={nombre} />
      <h3>Nombre: {nombre} </h3>
      <p>ID: {id} </p>
      <p>Precio: {precio} </p>

      {/* Utiliza Link para enlazar al detalle del producto */}
      <Link to={`/item/${id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
};

export default Item;


