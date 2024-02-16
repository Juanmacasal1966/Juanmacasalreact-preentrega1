import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../Services/Config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("El producto no existe");
        }
      } catch (error) {
        setError("Hubo un error al cargar el detalle del producto");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProducto();
    }

    return () => {
    };
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Cargando detalle del producto...</p>
      ) : error ? (
        <p>{error}</p>
      ) : producto ? (
        <ItemDetail {...producto} />
      ) : null}
    </div>
  );
}

export default ItemDetailContainer;
