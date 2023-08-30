import cart from "../assets/cart_white.png";

const CartWidget = () => {
  return (
    <div className="cartStyle">
      <img src={cart} alt="carrito" />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
