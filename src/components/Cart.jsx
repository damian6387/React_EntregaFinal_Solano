import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext); //Consumo los datos de carrito
  return (
    <Container className="cartDetailStyle">
      {carrito.length > 0 &&
        carrito.map((producto) => (
          <div key={producto.id}>
            <h4>{producto.title}</h4>
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
          <h4>Precio Total:${precioTotal()}</h4>
          <Button
            className="link-vaciar-style"
            variant="success"
            onClick={vaciarCarrito}
          >
            Vaciar Carrito
          </Button>
          <Link to="/checkout" className="button-text-comprar">
            <Button variant="success">Finalizar compra</Button>
          </Link>
        </>
      ) : (
        <div className="containerStyle">
          <h3>Tu carrito esta vacio :(</h3>
        </div>
      )}
    </Container>
  );
};

export default Cart;
