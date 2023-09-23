import { useContext } from "react";
import cart from "../assets/cart_white.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Container } from "react-bootstrap";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext); //Consumo los datos de cantidadEnCarrito que se define en CartContext
  return (
    <Link to="/cart" className="elementsCartStyle">
      <Container>
        <img src={cart} alt="carrito" className="CartStyle" />
        <span className="number-cart-style">{cantidadEnCarrito()}</span>
      </Container>
    </Link>
  );
};

export default CartWidget;
