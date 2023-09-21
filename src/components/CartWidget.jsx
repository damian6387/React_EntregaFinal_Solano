import { useContext } from "react";
import cart from "../assets/cart_white.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext); //Consumo los datos de cantidadEnCarrito
  return (
    <div className="elementsCartStyle">
      <Link to="/cart">
        <img src={cart} alt="carrito" className="CartStyle" />
        <span className="numberCartStyle">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
