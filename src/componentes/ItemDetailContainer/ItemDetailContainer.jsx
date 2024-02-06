import React, { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const idNumber = parseInt(id); 
    getUnProducto(idNumber) 
      .then(res => setProducto(res))
      .catch(error => {
        
      });
  }, [id]);

  return (
    <div>
      {producto ? (
        <ItemDetail {...producto} />
      ) : (
        <p>Cargando detalle del producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;


