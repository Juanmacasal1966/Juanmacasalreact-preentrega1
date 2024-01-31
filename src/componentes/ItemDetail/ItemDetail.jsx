
import React from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = () => {
  
  const { id } = useParams();

  const itemDetails = {
    id: id,
    nombre: 'Nombre del ítem',
    precio: 'Precio del ítem',
    img: 'URL de la imagen del ítem',
  };

  return (
    <div className="item-detail-container">
      <h2 className="name">Nombre: {itemDetails.nombre} </h2>
      <h3 className="price">Precio: {itemDetails.precio} </h3>
      <p className="id">ID: {itemDetails.id} </p>
      <p></p>
      <img src={itemDetails.img} alt={itemDetails.nombre} className="item-image" />
    </div>
  );
}

export default ItemDetail;

