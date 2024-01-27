
import React from 'react';
import "./ItemDetail.css";  // Importa el archivo CSS

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="item-detail-container">
      <h2 className="name">Nombre: {nombre} </h2>
      <h3 className="price">Precio: {precio} </h3>
      <p className="id">ID: {id} </p>
      <p></p>
      <img src={img} alt={nombre} className="item-image" />
    </div>
  );
}

export default ItemDetail;
