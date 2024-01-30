import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../asyncmock";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <h2>{greeting}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;

