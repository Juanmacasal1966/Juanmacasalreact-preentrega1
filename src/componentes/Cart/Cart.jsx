import React, { useContext, useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import './Cart.css';

const Cart = () => {
  const { carrito, total, vaciarCarrito, agregarAlCarrito, eliminarProducto } = useContext(CarritoContext);
  const [orderId, setOrderId] = useState(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    confirmEmail: ''
  });

  const handleRealizarCompra = () => {
   
    if (
      formData.nombre.trim() === '' ||
      formData.apellido.trim() === '' ||
      formData.telefono.trim() === '' ||
      formData.email.trim() === '' ||
      formData.confirmEmail.trim() === ''
    ) {
      alert('Por favor completa todos los campos del formulario');
      return;
    }

   
    const orderIdSimulado = Math.floor(Math.random() * 1000000);
    setOrderId(orderIdSimulado);
    setOrderSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      {carrito.map((producto) => (
        <div key={producto.item.id} className="cart-item">
          <p>{producto.item.nombre} - Cantidad: {producto.cantidad}</p>
          <button onClick={() => agregarAlCarrito(producto.item, 1)}>+</button>
          <button onClick={() => eliminarProducto(producto.item.id)}>-</button>
        </div>
      ))}
      <p className="cart-total">Total: ${total}</p>
      {!orderSubmitted ? (
        <div>
          <button onClick={handleRealizarCompra}>Realizar compra</button>
          <form className="cart-form">
            <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={formData.nombre} />
            <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} value={formData.apellido} />
            <input type="tel" name="telefono" placeholder="Teléfono" onChange={handleChange} value={formData.telefono} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
            <input type="email" name="confirmEmail" placeholder="Confirmar Email" onChange={handleChange} value={formData.confirmEmail} />
          </form>
        </div>
      ) : (
        <p>Número de orden: {orderId}</p>
      )}
    </div>
  );
};

export default Cart;

