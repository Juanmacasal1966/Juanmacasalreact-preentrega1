import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { db } from "../../Services/Config";
import { collection, getDocs, where, query } from "firebase/firestore";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosCollection = collection(db, 'productos');
        const q = id ? query(productosCollection, where('categoria', '==', id)) : productosCollection;
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(data);
      } catch (error) {
        setError("Hubo un error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
}

export default ItemListContainer;
