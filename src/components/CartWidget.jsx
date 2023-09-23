import { useContext } from "react";
import cart from "../assets/cart_white.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext); //Consumo los datos de cantidadEnCarrito que se define en CartContext
  return (
    <Link to="/cart">
      <div className="elementsCartStyle">
        <img src={cart} alt="carrito" className="CartStyle" />
        <span className="numberCartStyle">{cantidadEnCarrito()}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
