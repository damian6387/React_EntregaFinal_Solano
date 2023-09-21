import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext); //Consumo los datos de carrito
  return (
    <Container className="cartDetailStyle">
      {carrito.length > 0 &&
        carrito.map((producto) => (
          <div key={producto.id}>
            <h5>{producto.title}</h5>
            <div className="textCartStyle ">
              <p>Cantidad: {producto.cantidad}</p>
              <p>Precio unitario: ${producto.price}</p>
              <p>Precio total: ${producto.price * producto.cantidad}</p>
            </div>
          </div>
        ))}
      {carrito.length > 0 ? (
        <>
          <br></br>
          <h3>Precio Total:${precioTotal()}</h3>
          <Button variant="link" onClick={vaciarCarrito}>
            Vaciar Carrito
          </Button>
          <Button variant="link">Comprar Carrito</Button>
        </>
      ) : (
        <h3>Tu carrito esta vacio :(</h3>
      )}
    </Container>
  );
};

export default Cart;
