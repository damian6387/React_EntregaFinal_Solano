import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext); //Consumo los datos de carrito
  return (
    <div>
      {carrito.length > 0 &&
        carrito.map((producto) => (
          <div key={producto.id}>
            <h4>{producto.title}</h4>
            <p>Cantidad:{producto.cantidad}</p>
            <p>Precio unitario:${producto.price}</p>
            <p>Precio total:${producto.price * producto.cantidad}</p>
          </div>
        ))}
      {carrito.length > 0 ? (
        <>
          <h2>Precio Total:${precioTotal()}</h2>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button>Comprar Carrito</button>
        </>
      ) : (
        <h2>Tu carrito esta vacio</h2>
      )}
    </div>
  );
};

export default Cart;
