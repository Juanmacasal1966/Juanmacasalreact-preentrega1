import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../asyncmock";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await getProductos();
        setProductos(respuesta);
      } catch (error) {
        setError("Hubo un error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const productosFiltrados = id ? productos.filter(producto => producto.categoria === id) : productos;

  return (
    <div>
      <h2>{greeting}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ItemList productos={productosFiltrados} />
      )}
    </div>
  );
};

export default ItemListContainer;

