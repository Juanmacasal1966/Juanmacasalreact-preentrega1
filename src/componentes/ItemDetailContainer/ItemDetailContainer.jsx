import React, { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams(); 

  useEffect(() => {
    getUnProducto(itemId)
      .then(res => setProducto(res))
  }, [itemId]); 

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
